import Link from "next/link";
import { services } from "../../site-content";

// Fotos reais do portfólio, uma por frente de atuação.
const photos: Record<string, { id: string; width: number; height: number; alt: string }> = {
  predial: {
    id: "infraestrutura-predial",
    width: 900,
    height: 1600,
    alt: "Ambiente em obra com dutos e tubulações aparentes no teto.",
  },
  incendio: {
    id: "equipe-manutencao-bombas",
    width: 900,
    height: 1600,
    alt: "Equipe da Alfa fazendo manutenção em bomba de combate a incêndio.",
  },
  eletrica: {
    id: "teste-motor-bomba",
    width: 900,
    height: 1600,
    alt: "Profissional da Alfa em teste de motor e bomba.",
  },
};

export function ServicesTeaser() {
  return (
    <section className="services-home section-space" aria-labelledby="solutions-title">
      <div className="container">
        <div className="title-block" data-reveal>
          <h2 id="solutions-title">Nossos Serviços</h2>
          <span className="title-rule" aria-hidden="true" />
        </div>
        <div className="service-cards">
          {services.map((service, index) => {
            const photo = photos[service.id];
            return (
              <article key={service.id} data-reveal data-reveal-delay={index * 60}>
                <Link href={`/servicos#servico-${service.id}`} className="service-card-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/portfolio/servicos/${photo.id}-640.webp`}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    alt={photo.alt}
                  />
                </Link>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link className="text-link" href={`/servicos#servico-${service.id}`}>
                  Saiba mais <span aria-hidden="true">↗</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
