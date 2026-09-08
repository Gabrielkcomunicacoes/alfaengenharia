import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const candidates = (process.env.PATH || "")
  .split(path.delimiter)
  .map((dir) =>
    path.resolve(dir, "../agent-browser/bin/agent-browser-win32-x64.exe"),
  );
const binary =
  process.env.ALFA_BROWSER_BIN ||
  candidates.find(existsSync) ||
  "agent-browser";
const url = process.env.ALFA_PREVIEW_URL || "http://localhost:3010/";
const report = { url, date: new Date().toISOString(), checks: [] };
mkdirSync("artifacts", { recursive: true });
function run(...args) {
  const result = spawnSync(
    binary,
    ["--session", "alfa-preview", "--json", ...args],
    { encoding: "utf8", timeout: 60000 },
  );
  if (result.error) throw result.error;
  const response = JSON.parse(result.stdout);
  if (!response.success) throw new Error(result.stdout);
  return response.data;
}
const evaluate = (source) => run("eval", source).result;
function check(name, value) {
  assert.ok(value, name);
  report.checks.push(name);
  console.log(`PASS ${name}`);
}
const frames = `const frames = (n = 3) => new Promise(resolve => { let i = 0; function tick() { if (++i >= n) resolve(); else requestAnimationFrame(tick); } requestAnimationFrame(tick); });`;

// Capture real Web Animations calls in the isolated test page. Nothing is sent externally.
run("set", "media", "light", "reduced-motion");
run("set", "viewport", "1440", "1000");
run("open", url);
run("wait", ".form-button:enabled");
evaluate(`document.fonts.ready.then(() => true)`);
check(
  "Movimento inicialmente reduzido não cria animações",
  evaluate(`document.getAnimations().length === 0`),
);
evaluate(`window.__motionRecords = []; window.__nativeAnimate = Element.prototype.animate; Element.prototype.animate = function(keyframes, options) {
  const regions = ['.hero','.credibility','.solutions','.about','.region','.process','.preparation','.faq-section','.contact','.site-footer'];
  window.__motionRecords.push({tag:this.tagName,classes:this.className,regions:regions.filter(s=>this.closest(s)),duration:options.duration,delay:options.delay||0,first:keyframes[0],target:this});
  return window.__nativeAnimate.call(this,keyframes,options);
};`);
run("set", "media", "light", "no-preference");
check(
  "Movimento pode ser reativado durante a sessão",
  evaluate(`!matchMedia('(prefers-reduced-motion: reduce)').matches`),
);
const sweep = evaluate(`(async()=>{
  ${frames}
  const positions=[];
  for(let y=0;y<document.documentElement.scrollHeight;y+=innerHeight*.62){
    window.scrollTo({top:y,behavior:'instant'}); await frames();
    positions.push({y:scrollY,overflow:document.documentElement.scrollWidth>innerWidth});
  }
  await frames();
  return {positions,records:window.__motionRecords.map(({target,...record})=>record)};
})()`);
report.sweep = sweep;
for (const region of [
  ".hero",
  ".credibility",
  ".solutions",
  ".about",
  ".region",
  ".process",
  ".preparation",
  ".faq-section",
  ".contact",
  ".site-footer",
]) {
  check(
    `Entradas reais ao rolar: ${region}`,
    sweep.records.some((record) => record.regions.includes(region)),
  );
}
check(
  "Movimento não introduz rolagem horizontal",
  sweep.positions.every((position) => !position.overflow),
);
check(
  "Animações limitadas a transform e opacidade",
  sweep.records.every((record) =>
    Object.keys(record.first).every((key) =>
      ["opacity", "transform"].includes(key),
    ),
  ),
);
check(
  "Duração e escalonamento contidos",
  sweep.records.every(
    (record) =>
      record.duration >= 400 && record.duration <= 650 && record.delay <= 120,
  ),
);
const beforeRepeat = sweep.records.length;
evaluate(
  `(async()=>{ ${frames} window.scrollTo({top:0,behavior:'instant'}); await frames(); return true; })()`,
);
check(
  "Entradas não repetem ao voltar ao topo",
  evaluate(`window.__motionRecords.length`) === beforeRepeat,
);

for (const id of ["solucoes", "a-alfa", "como-contratar", "contato"]) {
  const active = evaluate(`(async()=>{ ${frames}
    const section=document.getElementById('${id}');
    window.scrollTo({top:section.getBoundingClientRect().top+scrollY-document.querySelector('.site-header').offsetHeight-24,behavior:'instant'});
    await frames();
    return {active:document.querySelector('.desktop-nav [aria-current="location"]')?.hash,progress:getComputedStyle(document.querySelector('.reading-progress span')).transform};
  })()`);
  check(`Menu acompanha a seção ${id}`, active.active === `#${id}`);
  check(
    `Progresso atualizado em ${id}`,
    active.progress !== "matrix(0, 0, 0, 1, 0, 0)" &&
      active.progress !== "none",
  );
}
const waves = evaluate(
  `[...document.querySelectorAll('[data-wave]')].map(e=>({shadow:getComputedStyle(e.querySelector('.wave-layer')).filter,clip:getComputedStyle(e.querySelector('.wave-surface')).clipPath,layerClip:getComputedStyle(e.querySelector('.wave-layer')).clipPath,ariaHidden:e.getAttribute('aria-hidden')}))`,
);
report.waves = waves;
check(
  "As seis ondas têm sombra fora do recorte e são decorativas",
  waves.length === 6 &&
    waves.every(
      (wave) =>
        wave.shadow.includes("drop-shadow") &&
        wave.clip.startsWith("polygon") &&
        wave.layerClip === "none" &&
        wave.ariaHidden === "true",
    ),
);

// Fresh page: focus must interrupt an actual entrance animation in the form.
run("open", url);
run("wait", ".form-button:enabled");
const focus = evaluate(`(async()=>{ ${frames}
  const panel=document.querySelector('.form-panel');
  window.scrollTo({top:panel.getBoundingClientRect().top+scrollY-180,behavior:'instant'});
  await frames();
  const before=panel.getAnimations().length;
  const input=document.querySelector('#contact-name');input.focus({preventScroll:true});
  return {before,after:panel.getAnimations().length,focused:document.activeElement===input,opacity:getComputedStyle(panel).opacity};
})()`);
report.focus = focus;
check(
  "Foco interrompe a entrada e mantém formulário legível",
  focus.before > 0 &&
    focus.after === 0 &&
    focus.focused &&
    focus.opacity === "1",
);
run("set", "media", "light", "reduced-motion");
check(
  "Preferência reduzida cancela movimentos e oculta a barra animada",
  evaluate(
    `document.getAnimations().length===0 && getComputedStyle(document.querySelector('.reading-progress')).display==='none' && getComputedStyle(document.documentElement).scrollBehavior==='auto'`,
  ),
);

run("set", "viewport", "390", "900");
run("open", url);
run("wait", ".form-button:enabled");
run("click", ".mobile-menu summary");
run("click", '#mobile-navigation a[href="#solucoes"]');
check(
  "Menu mobile leva o foco para o destino",
  evaluate(
    `document.activeElement.id==='solucoes' && !document.querySelector('.mobile-menu').open`,
  ),
);
run("click", '.solution-index a[href="#servico-eletrica"]');
check(
  "Atalho de serviço chega ao conteúdo correto",
  evaluate(
    `location.hash==='#servico-eletrica' && document.querySelector('#servico-eletrica').getBoundingClientRect().top>=document.querySelector('.site-header').getBoundingClientRect().bottom`,
  ),
);
run("screenshot", "artifacts/service-shortcut-mobile.png");
check(
  "Sombras e atalhos não causam overflow mobile",
  evaluate(`document.documentElement.scrollWidth===innerWidth`),
);

// Return the preview to its normal presentation, with native browser behavior restored.
run("set", "media", "light", "no-preference");
run("set", "viewport", "1440", "1000");
run("open", url);
report.errors = run("errors");
check(
  "Nenhum erro no navegador durante o teste de movimento",
  report.errors.errors.length === 0,
);
writeFileSync("artifacts/motion-report.json", JSON.stringify(report, null, 2));
console.log(
  `${report.checks.length} verificações de movimento e navegação aprovadas.`,
);
