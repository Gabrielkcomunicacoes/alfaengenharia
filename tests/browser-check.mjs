import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

// Execute por npm exec --package=agent-browser -- node tests/browser-check.mjs
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
const session = "alfa-preview";
const report = {
  url,
  date: new Date().toISOString(),
  checks: [],
  screens: [],
  contrast: {},
};
mkdirSync("artifacts", { recursive: true });
function run(...args) {
  const result = spawnSync(binary, ["--session", session, "--json", ...args], {
    encoding: "utf8",
    timeout: 60000,
  });
  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new Error(`${args[0]}: ${result.stdout} ${result.stderr}`);
  const response = JSON.parse(result.stdout);
  if (!response.success) throw new Error(JSON.stringify(response));
  return response.data;
}
function evaluate(code) {
  return run("eval", code).result;
}
function check(name, condition) {
  assert.ok(condition, name);
  report.checks.push(name);
  console.log(`PASS ${name}`);
}

run("open", url);
run("wait", ".form-button:enabled");
evaluate("document.fonts.ready.then(() => true)");
evaluate("Promise.all(document.getAnimations().map(animation => animation.finished.catch(() => {}))).then(() => true)");
for (const width of [360, 390, 768, 1024, 1440]) {
  run("set", "viewport", String(width), "900");
  evaluate("window.scrollTo(0,0)");
  const screen = evaluate(
    `({width:innerWidth, scrollWidth:document.documentElement.scrollWidth, h1:document.querySelector('h1').getBoundingClientRect().toJSON(), cta:document.querySelector('.hero .button').getBoundingClientRect().toJSON(), fonts:document.fonts.status, formEnabled:!document.querySelector('fieldset').disabled})`,
  );
  check(`Sem rolagem horizontal em ${width}px`, screen.scrollWidth === width);
  check(
    `H1 dentro da tela em ${width}px`,
    screen.h1.x >= 0 && screen.h1.right <= width,
  );
  check(
    `CTA visível cedo em ${width}px`,
    screen.cta.bottom < 680 &&
      screen.cta.left >= 0 &&
      screen.cta.right <= width,
  );
  check(
    `Fontes e formulário prontos em ${width}px`,
    screen.fonts === "loaded" && screen.formEnabled,
  );
  report.screens.push(screen);
  run("screenshot", `artifacts/viewport-${width}.png`);
  run("screenshot", `artifacts/page-${width}.png`, "--full");
}

const documentAudit = evaluate(`({
  headings:document.querySelectorAll('h1').length,
  emptyLinks:[...document.querySelectorAll('a')].filter(a=>!a.getAttribute('href')).length,
  missingAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>a.hash && !document.getElementById(a.hash.slice(1))).map(a=>a.hash),
  wa:[...document.querySelectorAll('a[href^="https://wa.me/"]')].map(a=>({href:a.href,service:a.dataset.service})),
  mail:[...document.querySelectorAll('a[href^="mailto:"]')].map(a=>a.href),
  thirdPartyResources:performance.getEntriesByType('resource').map(r=>r.name).filter(name=>new URL(name).origin!==location.origin),
  meta:{title:document.title,description:document.querySelector('meta[name="description"]')?.content,canonical:!!document.querySelector('link[rel="canonical"]')}
})`);
check(
  "Um H1 e nenhum link vazio ou âncora inexistente",
  documentAudit.headings === 1 &&
    !documentAudit.emptyLinks &&
    !documentAudit.missingAnchors.length,
);
check(
  "Todos os links WhatsApp usam o número comercial",
  documentAudit.wa.every(
    (link) => new URL(link.href).pathname === "/5592988482850",
  ),
);
const contextual = documentAudit.wa.filter((link) => link.service);
check(
  "Três mensagens diferentes por serviço",
  contextual.length === 3 &&
    new Set(
      contextual.map((link) => new URL(link.href).searchParams.get("text")),
    ).size === 3,
);
check(
  "E-mails corretos",
  documentAudit.mail.every(
    (link) => link === "mailto:comercial@alfaengenhariaam.com.br",
  ),
);
check(
  "Nenhum recurso externo carregado pela página",
  documentAudit.thirdPartyResources.length === 0,
);
check(
  "Metadados específicos sem canonical inventado",
  documentAudit.meta.title.includes("Alfa Engenharia") &&
    documentAudit.meta.description.includes("Manaus") &&
    !documentAudit.meta.canonical,
);

run("set", "viewport", "390", "844");
evaluate("window.scrollTo(0,0)");
run("click", ".mobile-menu summary");
check(
  "Menu mobile abre",
  evaluate('document.querySelector(".mobile-menu").open'),
);
run("screenshot", "artifacts/mobile-menu.png");
run("press", "Escape");
check(
  "Escape fecha menu e retorna foco",
  evaluate(
    '!document.querySelector(".mobile-menu").open && document.activeElement.matches(".mobile-menu summary")',
  ),
);
run("press", "Enter");
run("click", '#mobile-navigation a[href="#solucoes"]');
check(
  "Âncora mobile navega e fecha menu",
  evaluate(
    'location.hash==="#solucoes" && !document.querySelector(".mobile-menu").open',
  ),
);
run("set", "media", "light", "reduced-motion");
check(
  "Movimento reduzido respeitado",
  evaluate(
    'matchMedia("(prefers-reduced-motion: reduce)").matches && getComputedStyle(document.documentElement).scrollBehavior==="auto" && document.getAnimations().length===0',
  ),
);
run("click", ".mobile-menu summary");
run("click", '#mobile-navigation a[href="#contato"]');
check(
  "Cabeçalho não oculta destino da âncora",
  evaluate(
    'document.querySelector("#contato").getBoundingClientRect().top >= document.querySelector(".site-header").getBoundingClientRect().bottom',
  ),
);

run("click", ".faq-list details:first-child summary");
check(
  "FAQ nativa abre",
  evaluate('document.querySelector(".faq-list details").open'),
);
run("focus", ".faq-list details:first-child summary");
run("press", "Enter");
check(
  "FAQ fecha pelo teclado",
  evaluate('!document.querySelector(".faq-list details").open'),
);

// Captura somente em memória durante o teste. Não abre WhatsApp nem envia mensagem.
evaluate(
  'window.__alfaOpened=[]; window.open=(url,target,features)=>{window.__alfaOpened.push({url,target,features});return null};window.__alfaEvents=[];window.addEventListener("alfa:interaction",e=>window.__alfaEvents.push(e.detail))',
);
run("click", ".form-button");
check(
  "Formulário vazio bloqueado",
  evaluate(
    '!document.querySelector("form").checkValidity() && window.__alfaOpened.length===0',
  ),
);
run("fill", "#contact-name", "   ");
run("fill", "#contact-company", "Empresa de teste");
run("fill", "#contact-city", "Manaus");
run("select", "#contact-service", "incendio");
run(
  "fill",
  "#contact-description",
  "Inspeção e testes do sistema de combate a incêndio.",
);
run("click", ".form-button");
check(
  "Espaços em branco rejeitados",
  evaluate(
    'document.querySelector("#contact-name").validity.customError && window.__alfaOpened.length===0',
  ),
);
run("fill", "#contact-name", "  João & Ana  ");
run("fill", "#contact-company", "Empresa de teste & Cia");
run(
  "fill",
  "#contact-description",
  "Inspeção do sistema de incêndio.\nNecessidade: avaliação & testes, conforme escopo.",
);
run("click", ".form-button");
const submitted = evaluate("window.__alfaOpened[0]");
const message = new URL(submitted.url).searchParams.get("text");
check(
  "Mensagem contém os cinco campos e preserva acentos",
  message.includes("Nome: João & Ana") &&
    message.includes("Empresa: Empresa de teste & Cia") &&
    message.includes("Cidade: Manaus") &&
    message.includes("Serviço de interesse: Sistemas de combate a incêndio") &&
    message.includes("Necessidade: avaliação & testes, conforme escopo."),
);
check(
  "Abertura protegida e fallback sem falso envio",
  submitted.target === "_blank" &&
    submitted.features.includes("noopener") &&
    evaluate(
      'document.querySelector(".form-status a").href===window.__alfaOpened[0].url && !document.querySelector(".form-status").textContent.includes("enviada")',
    ),
);
check(
  "Mensuração desativada durante o formulário",
  evaluate("window.__alfaEvents.length===0"),
);
run("screenshot", "artifacts/form-result.png");
run("fill", "#contact-city", "Parintins");
check(
  "Alteração dos campos limpa a mensagem anterior",
  evaluate('!document.querySelector(".form-status a")'),
);

function luminance(hex) {
  return hex
    .match(/\w\w/g)
    .map((v) => parseInt(v, 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
    .reduce((total, v, i) => total + v * [0.2126, 0.7152, 0.0722][i], 0);
}
for (const [name, foreground, background] of [
  ["ink-paper", "17283e", "f3f1eb"],
  ["muted-paper", "59656d", "f3f1eb"],
  ["accent-paper", "b21f2d", "f3f1eb"],
  ["white-accent", "ffffff", "b21f2d"],
  ["dark-secondary", "c5cdca", "17283e"],
  ["muted-faq", "59656d", "ffffff"],
  ["field-border", "8a9395", "fcfcfa"],
]) {
  const values = [luminance(foreground), luminance(background)].sort(
    (a, b) => b - a,
  );
  const ratio = (values[0] + 0.05) / (values[1] + 0.05);
  report.contrast[name] = Number(ratio.toFixed(2));
  check(`Contraste ${name}`, ratio >= (name === "field-border" ? 3 : 4.5));
}
run("open", url);
run("set", "viewport", "1440", "1000");
const accessibility = run("a11y");
check("Auditoria axe sem violações", accessibility.counts.violations === 0);
writeFileSync(
  "artifacts/accessibility.json",
  JSON.stringify(accessibility, null, 2),
);
const errors = run("errors");
report.browserErrors = errors;
report.documentAudit = documentAudit;
writeFileSync("artifacts/browser-report.json", JSON.stringify(report, null, 2));
console.log(
  `${report.checks.length} verificações aprovadas. Evidências em artifacts/.`,
);
