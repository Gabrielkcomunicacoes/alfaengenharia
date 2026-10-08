/* eslint-disable @next/next/no-img-element -- Fotografias locais otimizadas, com dimensões explícitas. */
import { content, services, whatsappUrl } from "../../site-content";

type Media = { id: string; width: number; height: number; alt: string };

// Fotos reais do portfólio: principal e de apoio para cada frente.
const serviceMedia: Record<string, [Media, Media]> = {
  predial: [
    {
      id: "manutencao-fachada",
      width: 1200,
      height: 1600,
      alt: "Plataforma elevatória junto à fachada de um galpão, com profissional no cesto.",
    },
    {
      id: "infraestrutura-predial",
      width: 900,
      height: 1600,
      alt: "Ambiente em obra com dutos e tubulações aparentes no teto.",
    },
  ],
  incendio: [
    {
      id: "inspecao-casa-de-bombas",
      width: 900,
      height: 1600,
      alt: "Profissional operando o painel de uma bomba de incêndio.",
    },
    {
      id: "equipe-manutencao-bombas",
      width: 900,
      height: 1600,
      alt: "Equipe da Alfa em manutenção do conjunto de bombas.",
    },
  ],
  eletrica: [
    {
      id: "teste-motor-bomba",
      width: 900,
      height: 1600,
      alt: "Profissionais fazendo medição elétrica em um motor.",
    },
    {
      id: "registro-inspecao-bombas",
      width: 900,
      height: 1600,
      alt: "Profissional anotando informações ao lado de bombas.",
    },
  ],
};

const otherMedia: Media[] = [
  {
    id: "servicos-fachada",
    width: 1200,
    height: 1600,
    alt: "Serviço em fachada com plataforma elevatória.",
  },
  {
    id: "soldagem-tubulacoes",
    width: 960,
    height: 1280,
    alt: "Profissional executando soldagem em tubulação.",
  },
  {
    id: "manutencao-motor-diesel",
    width: 899,
    height: 1599,
    alt: "Profissional fazendo manutenção em motor diesel.",
  },
];

export function ServicesSection() {
  return (
    <section
      className="services-page container section-space"
      id="solucoes"
      tabIndex={-1}
      aria-labelledby="solutions-title"
    >
      <div className="title-block" data-reveal>
        <h2 id="solutions-title">{content.solutions.title}</h2>
        <span className="title-rule" aria-hidden="true" />
        <p>{content.solutions.intro}</p>
      </div>
      <nav className="solution-chips" aria-label="Ir para uma solução" data-reveal>
        {services.map((service) => (
          <a key={service.id} href={`#servico-${service.id}`}>
            <span aria-hidden="true">{service.number}</span>
            {service.navigationTitle}
          </a>
        ))}
      </nav>
      <div className="svc-list">
        {services.map((service) => {
          const media = serviceMedia[service.id];
          return (
            <article
              className="svc-row"
              key={service.id}
              id={`servico-${service.id}`}
              tabIndex={-1}
              aria-labelledby={`title-${service.id}`}
            >
              <div className="svc-photos" data-reveal="left">
                <img
                  className="svc-photo-main"
                  src={`/images/portfolio/servicos/${media[0].id}.webp`}
                  width={media[0].width}
                  height={media[0].height}
                  loading="lazy"
                  alt={media[0].alt}
                />
                <img
                  className="svc-photo-side"
                  src={`/images/portfolio/servicos/${media[1].id}-640.webp`}
                  width={media[1].width}
                  height={media[1].height}
                  loading="lazy"
                  alt={media[1].alt}
                />
              </div>
              <div className="svc-copy" data-reveal="right" data-reveal-delay="80">
                <span className="svc-number" aria-hidden="true">
                  {service.number}
                </span>
                <p className="eyebrow">{service.category}</p>
                <h3 id={`title-${service.id}`}>{service.title}</h3>
                <p className="svc-lead">{service.description}</p>
                <p>{service.detail}</p>
                <p className="svc-note">{service.note}</p>
                <div className="service-start">
                  <span className="eyebrow">Para começar a conversa</span>
                  <p>{service.start}</p>
                </div>
                <a
                  className="button"
                  href={whatsappUrl(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="whatsapp"
                  data-location="service"
                  data-service={service.id}
                >
                  {service.cta}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <section className="contracting" aria-labelledby="contracting-title">
        <div className="contracting-heading" data-reveal>
          <div>
            <p className="eyebrow">{content.contracting.eyebrow}</p>
            <h3 id="contracting-title">{content.contracting.title}</h3>
          </div>
          <p>{content.contracting.description}</p>
        </div>
        <div className="contracting-options">
          {content.contracting.options.map((option, index) => (
            <div key={option.title} data-reveal data-reveal-delay={index * 70}>
              <span className="contracting-index" aria-hidden="true">
                {index === 0 ? "↻" : "↗"}
              </span>
              <p className="eyebrow">{option.label}</p>
              <h4>{option.title}</h4>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
        <a className="text-link" href="#como-contratar" data-reveal>
          Entender os próximos passos <span aria-hidden="true">↓</span>
        </a>
      </section>
      <section
        className="other-services-page"
        id="servicos-complementares"
        tabIndex={-1}
        aria-labelledby="other-services-title"
      >
        <div className="title-block" data-reveal>
          <h3 id="other-services-title">{content.other.title}</h3>
          <span className="title-rule" aria-hidden="true" />
          <p>{content.other.description}</p>
        </div>
        <div className="other-cards">
          {content.other.groups.map((group, index) => {
            const photo = otherMedia[index];
            return (
              <div
                className="other-card"
                key={group.title}
                data-reveal
                data-reveal-delay={index * 60}
              >
                <img
                  src={`/images/portfolio/servicos/${photo.id}-640.webp`}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  alt={photo.alt}
                />
                <div>
                  <h4>
                    <span className="other-number" aria-hidden="true">
                      0{index + 1}
                    </span>
                    {group.title}
                  </h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <p className="other-note" data-reveal>
          {content.other.note}
        </p>
      </section>
    </section>
  );
}
