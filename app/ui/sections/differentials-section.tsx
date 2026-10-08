import { WaveDivider } from "../wave-divider";
import { content } from "../../site-content";

const icons = [
  // Engrenagem entre duas mãos: experiência
  <svg key="a" viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="7" />
    <path d="M32 18v4M32 42v4M18 32h4M42 32h4M22 22l3 3M39 39l3 3M42 22l-3 3M25 39l-3 3" />
    <path d="M8 14h20l4 4M56 50H36l-4-4" />
  </svg>,
  // Equipe com estrelas: compromisso
  <svg key="b" viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="16" cy="18" r="5" />
    <circle cx="32" cy="18" r="5" />
    <circle cx="48" cy="18" r="5" />
    <path d="M8 34c0-7 4-10 8-10s8 3 8 10M24 34c0-7 4-10 8-10s8 3 8 10M40 34c0-7 4-10 8-10s8 3 8 10" />
    <path d="m16 54 2-5 5-1-4-3 1-5-4 3-4-3 1 5-4 3 5 1zM32 56l3-6 6-1-5-4 1-6-5 4-5-4 1 6-5 4 6 1zM48 54l2-5 5-1-4-3 1-5-4 3-4-3 1 5-4 3 5 1z" />
  </svg>,
  // Setas circulares: segurança e confiabilidade
  <svg key="c" viewBox="0 0 64 64" aria-hidden="true">
    <path d="M15.1 25.8A18 18 0 0 1 48.9 25.8M42 21.8l6.9 4 2.7-7.5" />
    <path d="M48.9 38.2A18 18 0 0 1 15.1 38.2M22 42.2l-6.9-4-2.7 7.5" />
  </svg>,
];

export function DifferentialsSection() {
  return (
    <section className="why-home" aria-labelledby="differentials-title">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="why-home-bg" src="/images/why-bg.webp" alt="" loading="lazy" />
      <WaveDivider from="white" to="paper" />
      <div className="container">
        <div className="title-block title-block-light" data-reveal>
          <h2 id="differentials-title">{content.why.title}</h2>
          <span className="title-rule" aria-hidden="true" />
        </div>
        <ul className="why-cards">
          {content.why.items.map((item, index) => (
            <li key={item.title} data-reveal data-reveal-delay={index * 60}>
              <span className="why-icon">{icons[index]}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
