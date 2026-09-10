import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

const binary = process.env.ALFA_BROWSER_BIN || "agent-browser";
const url = process.env.ALFA_PREVIEW_URL || "http://localhost:3010/";
const selector = 'img[data-original-src="/images/img-sete.jpg"]';
const webpRoute = "**/soldagem-componentes*.webp";
const jpegRoute = "**/images/img-sete.jpg";
const report = { url, checks: [] };

function run(...args) {
  const process = spawnSync(binary, ["--session", "alfa-image-fix", "--json", ...args], {
    encoding: "utf8",
    timeout: 60000,
  });
  if (process.error) throw process.error;
  assert.equal(process.status, 0, process.stdout || process.stderr);
  const response = JSON.parse(process.stdout);
  assert.equal(response.success, true, JSON.stringify(response.error));
  return response.data;
}
const evaluate = (code) => run("eval", code).result;
const image = `document.querySelector(${JSON.stringify(selector)})`;
function open() {
  run("open", url);
  run("wait", ".form-button:enabled");
  evaluate(`${image}.scrollIntoView({behavior:'instant',block:'center'})`);
}

mkdirSync("artifacts", { recursive: true });
try {
  for (const width of [1440, 390]) {
    run("set", "viewport", String(width), "1000");
    open();
    const normal = evaluate(`(async () => {
      const photos = [...document.querySelectorAll('.work-photo img')];
      photos.forEach(photo => { photo.loading = 'eager'; });
      await Promise.all(photos.map(photo => photo.decode()));
      return {count:photos.length, loaded:photos.every(photo => photo.naturalWidth > 0),
        overflow:document.documentElement.scrollWidth > innerWidth};
    })()`);
    assert.equal(normal.count, 9);
    assert.equal(normal.loaded, true);
    assert.equal(normal.overflow, false);
    report.checks.push({ width, normal });
  }

  run("network", "route", webpRoute, "--abort");
  for (const width of [1440, 390]) {
    run("set", "viewport", String(width), "1000");
    open();
    run("wait", "--fn", `${image}.complete && ${image}.naturalWidth > 0 && ${image}.currentSrc.endsWith('/images/img-sete.jpg')`);
    const recovered = evaluate(`({src:${image}.currentSrc, srcset:${image}.getAttribute('srcset'),
      sizes:${image}.getAttribute('sizes'), width:${image}.naturalWidth,
      overflow:document.documentElement.scrollWidth > innerWidth})`);
    assert.equal(recovered.srcset, null);
    assert.equal(recovered.sizes, null);
    assert.ok(recovered.width > 0);
    assert.equal(recovered.overflow, false);
    report.checks.push({ width, recovered });
  }
  run("screenshot", "artifacts/gallery-image-recovered.png");

  // If both requests fail, recovery must stop instead of repeatedly fetching.
  run("network", "route", jpegRoute, "--abort");
  open();
  run("wait", "--fn", `${image}.complete && ${image}.naturalWidth === 0 && !${image}.hasAttribute('srcset')`);
  run("wait", "--load", "networkidle");
  const attempts = evaluate(`performance.getEntriesByType('resource').filter(entry => entry.name.endsWith('/images/img-sete.jpg')).length`);
  assert.ok(attempts <= 1, "JPEG fallback must not loop");
  report.checks.push({ bothSourcesFail: true, originalAttempts: attempts });
} finally {
  run("network", "unroute", webpRoute);
  run("network", "unroute", jpegRoute);
  open();
}
writeFileSync("artifacts/gallery-image-check.json", JSON.stringify(report, null, 2));
console.log("PASS: nine photos load at desktop/mobile sizes; failed WebP recovers with JPEG; no retry loop.");
