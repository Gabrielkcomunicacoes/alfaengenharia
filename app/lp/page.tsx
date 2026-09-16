/* eslint-disable @next/next/no-img-element -- Fotografias locais otimizadas, com dimensões explícitas. */
import type { Metadata } from "next";
import { company, content, services, whatsappUrl } from "../site-content";
import { portfolio } from "../portfolio-content";
import { LpTopbar } from "../ui/lp-topbar";
import { ContactForm } from "../ui/contact-form";
import "./lp.css";

export const metadata: Metadata = {
  title: content.seo.lp.title,
  description: content.seo.lp.description,
  robots: { index: false, follow: false },
};

export default function LandingPage() {
  return (
    <>
      <LpTopbar />
      <main id="conteudo" tabIndex={-1} className="lp-main">
        <section className="lp-hero container">
          <p className="eyebrow">{content.lp.eyebrow}</p>
          <h1>{content.lp.title}</h1>
          <p className="lp-hero-description">{content.lp.description}</p>
          <a
            className="button lp-cta"
            href={whatsappUrl(content.lp.message)}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp"
            data-location="lp-hero"
          >
            {content.lp.cta} <span aria-hidden="true">↗</span>
          </a>
          <ul className="lp-badges">
            {content.lp.badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </section>

        <section className="lp-services container" aria-label="Serviços">
          <div className="lp-service-chips">
            {services.map((service) => (
              <a
                key={service.id}
                className="lp-chip"
                href={whatsappUrl(service.message)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp"
                data-location="lp-service"
                data-service={service.id}
              >
                <span className="lp-chip-number">{service.number}</span>
                <span className="lp-chip-title">{service.navigationTitle}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="lp-proof container" aria-label="Trabalhos executados">
          <p className="eyebrow">Antes e depois</p>
          <div className="lp-proof-grid">
            {portfolio.slice(0, 3).map((project) => (
              <figure className="lp-proof-item" key={project.id}>
                <img
                  src={project.after.src}
                  alt={project.after.alt}
                  width={project.after.width}
                  height={project.after.height}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{project.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="lp-form container" aria-label="Formulário de contato">
          <p className="eyebrow">Solicite um orçamento</p>
          <h2>Preencha e receba um retorno da nossa equipe.</h2>
          <ContactForm />
        </section>
      </main>
      <footer className="lp-footer">
        <div className="container">
          <p>
            {company.legalName} · CNPJ {company.cnpj}
            <br />
            WhatsApp: {company.phone}
          </p>
        </div>
      </footer>
    </>
  );
}
