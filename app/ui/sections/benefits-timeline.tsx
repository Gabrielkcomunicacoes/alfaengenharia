"use client";
import { useEffect } from "react";
import { content } from "../../site-content";

const icons = [
  // Engenheiros responsáveis: prancheta com visto
  <svg key="a" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4h6v3H9zM9 14l2 2 4-4" />
  </svg>,
  // Segurança do trabalho: escudo
  <svg key="b" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.500 7-10V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
  // Incêndio e pânico: chama
  <svg key="c" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3c1 3.500 5 5.500 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 .200 1.500 1 2 2 2 0-3-1-5 1-8z" />
  </svg>,
  // Atendimento regional: alfinete de mapa
  <svg key="d" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.500" />
  </svg>,
  // Prazos: relógio
  <svg key="e" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>,
];

const steps = [
  ...content.differentials.items,
  content.about.commitments[2],
];

// Escurecimento do fundo fixo e timeline que acende conforme o scroll.
function initBenefitsScroll() {
  const stage = document.querySelector<HTMLElement>(".stage");
  const chain = document.getElementById("chain");
  const chainFill = document.getElementById("chainFill");
  const chainLine = document.querySelector<HTMLElement>(".chain-line");
  if (!stage || !chain || !chainFill || !chainLine) return () => {};

  const items = chain.querySelectorAll<HTMLElement>(".step-b");
  const dots = chain.querySelectorAll<HTMLElement>(".dot");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) items.forEach((item) => item.classList.add("on"));

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const update = () => {
    const vh = innerHeight;
    // Efeito 1: escurece até 40% durante os cards e fecha só no fim do stage.
    const base = clamp(scrollY / (vh * 0.7), 0, 1) * 0.4;
    const endFade = clamp(
      (vh - stage.getBoundingClientRect().bottom) / (vh * 0.45),
      0,
      1,
    );
    stage.style.setProperty("--ov-o", (base + (1 - base) * endFade).toFixed(4));

    // Efeito 2: a linha de leitura fica a 60% da altura da tela.
    if (!items.length || !dots.length) return;
    const chainRect = chain.getBoundingClientRect();
    const y = clamp(vh * 0.6 - chainRect.top, 0, chainRect.height);
    const first = dots[0].getBoundingClientRect();
    const last = dots[dots.length - 1].getBoundingClientRect();
    const t0 = first.top + first.height / 2 - chainRect.top;
    const t1 = last.top + last.height / 2 - chainRect.top;
    const total = Math.max(0, t1 - t0);
    chainLine.style.top = `${t0}px`;
    chainLine.style.height = `${total}px`;
    chainFill.style.top = `${t0}px`;
    chainFill.style.height = `${clamp(y - t0, 0, total)}px`;
    if (!reduce) {
      items.forEach((item) => {
        const pos = item.getBoundingClientRect().top - chainRect.top;
        item.classList.toggle("on", y >= pos + 24);
      });
    }
  };

  let raf: number | null = null;
  const onScroll = () => {
    if (raf !== null) return;
    raf = requestAnimationFrame(() => {
      update();
      raf = null;
    });
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll, { passive: true });
  update();
  const timer = setTimeout(update, 100);

  return () => {
    removeEventListener("scroll", onScroll);
    removeEventListener("resize", onScroll);
    if (raf !== null) cancelAnimationFrame(raf);
    clearTimeout(timer);
  };
}

export function BenefitsTimeline() {
  useEffect(() => initBenefitsScroll(), []);

  return (
    <section className="benefits" id="beneficios" aria-labelledby="benefits-title">
      <div className="container">
        <div className="title-block title-block-light">
          <h2 id="benefits-title">Responsabilidade técnica em cada obra.</h2>
          <span className="title-rule" aria-hidden="true" />
          <p>O que sustenta o trabalho da Alfa, do primeiro contato à entrega.</p>
        </div>
        <div className="chain" id="chain">
          <i className="chain-line" aria-hidden="true" />
          <i className="chain-fill" id="chainFill" aria-hidden="true" />
          <ol>
            {steps.map((step, index) => (
              <li className="step-b" key={step.title}>
                <span className="dot" aria-hidden="true" />
                <div className="bcard">
                  <div className="bcard-icon">{icons[index]}</div>
                  <div className="bcard-text">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
