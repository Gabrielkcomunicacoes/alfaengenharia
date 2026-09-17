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

const painPoints = [
  "Fachada, pintura ou estrutura mostrando desgaste e cobrando manutenção há tempo.",
  "Sistema de combate a incêndio sem inspeção recente — um risco para o laudo do Corpo de Bombeiros.",
  "Equipamento parado, aguardando uma instalação elétrica bem executada e dentro do prazo.",
  "Dificuldade em achar uma empresa de engenharia que responda rápido e cumpra o combinado.",
];

const differentiators = [
  {
    title: "Engenheiros à frente da obra",
    description:
      "Cada projeto é coordenado por engenheiros registrados no CREA/AM, não apenas por uma equipe de campo.",
  },
  {
    title: "Mais de 10 anos em Manaus",
    description:
      "Atuação desde 2013, com CNPJ ativo e histórico de obras entregues para empresas da região.",
  },
  {
    title: "Escopo claro antes de começar",
    description:
      "A visita técnica antecede o orçamento. Você sabe exatamente o que será feito antes de aprovar.",
  },
  {
    title: "Atendimento em Manaus e no interior",
    description:
      "Estrutura para atender a capital e o interior do Amazonas, conforme a localização da sua empresa.",
  },
];

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

        <section className="lp-pain container" aria-label="Situações que a Alfa resolve">
          <p className="eyebrow">Reconhece alguma dessas situações?</p>
          <h2>Se a estrutura da sua empresa está pedindo atenção, quanto mais tempo passa, maior o risco.</h2>
          <ul className="lp-pain-list">
            {painPoints.map((point) => (
              <li key={point}>
                <span aria-hidden="true">✕</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="lp-pain-bridge">
            A Alfa Engenharia cuida da manutenção predial, dos sistemas de combate a incêndio e das
            instalações elétricas da sua empresa — com engenheiro e encarregado acompanhando cada etapa.
          </p>
        </section>

        <section className="lp-services container" aria-label="Serviços">
          <p className="eyebrow">O que a Alfa resolve para a sua empresa</p>
          <div className="lp-service-cards">
            {services.map((service) => (
              <article className="lp-service-card" key={service.id}>
                <span className="lp-service-card-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a
                  className="text-link"
                  href={whatsappUrl(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="whatsapp"
                  data-location="lp-service"
                  data-service={service.id}
                >
                  {service.cta} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="lp-why container" aria-label="Por que escolher a Alfa">
          <p className="eyebrow">Por que empresas escolhem a Alfa</p>
          <h2>Engenharia de verdade, não só mão de obra.</h2>
          <div className="lp-why-grid">
            {differentiators.map((item) => (
              <div className="lp-why-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="lp-proof container" aria-label="Trabalhos executados">
          <p className="eyebrow">Antes e depois</p>
          <h2>Serviços executados pela nossa equipe.</h2>
          <div className="lp-proof-grid">
            {portfolio.map((project) => (
              <figure className="lp-proof-item" key={project.id}>
                <div className="lp-proof-images">
                  <span>
                    <img
                      src={project.before.src}
                      alt={project.before.alt}
                      width={project.before.width}
                      height={project.before.height}
                      loading="lazy"
                      decoding="async"
                    />
                    <em>Antes</em>
                  </span>
                  <span>
                    <img
                      src={project.after.src}
                      alt={project.after.alt}
                      width={project.after.width}
                      height={project.after.height}
                      loading="lazy"
                      decoding="async"
                    />
                    <em>Depois</em>
                  </span>
                </div>
                <figcaption>
                  <strong>{project.title}</strong>
                  <span>{project.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="lp-team container" aria-label="Equipe técnica">
          <p className="eyebrow">Quem responde tecnicamente pela obra</p>
          <h2>{content.about.title}</h2>
          <p className="lp-team-description">{content.about.description}</p>
          <ul className="lp-team-list">
            {content.about.team.map((member) => (
              <li key={member.name}>
                <strong>{member.name}</strong>
                <span>{member.role}</span>
                <span className="lp-team-registration">{member.registration}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="lp-process container" aria-label="Como funciona">
          <p className="eyebrow">Como funciona</p>
          <h2>{content.process.title}</h2>
          <ol className="lp-process-list">
            {content.process.steps.map((step, index) => (
              <li key={step.title}>
                <span className="lp-process-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <p className="lp-process-detail">{step.detail}</p>
              </li>
            ))}
          </ol>
          <p className="lp-process-note">{content.process.note}</p>
        </section>

        <section className="lp-faq container" aria-label="Perguntas frequentes">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2>Ainda com dúvidas?</h2>
          <div className="lp-faq-list">
            {content.faq.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <span className="lp-faq-toggle" aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="lp-form container" aria-label="Formulário de contato">
          <p className="eyebrow">Solicite um orçamento</p>
          <h2>Preencha e receba um retorno da nossa equipe.</h2>
          <p className="lp-form-note">
            Atendemos empresas em Manaus e no interior do Amazonas. Conte o que sua empresa precisa e
            um retorno é enviado a partir da avaliação da demanda.
          </p>
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
      <a
        className="lp-sticky-cta"
        href={whatsappUrl(content.lp.message)}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp"
        data-location="lp-sticky"
      >
        {content.lp.cta} <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}
