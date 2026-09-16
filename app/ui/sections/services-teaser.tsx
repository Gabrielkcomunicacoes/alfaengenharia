import Link from "next/link";
import { content, services } from "../../site-content";

export function ServicesTeaser() {
  return (
    <section
      className="solutions container section-space"
      aria-labelledby="solutions-title"
    >
      <div className="section-heading" data-reveal>
        <p className="eyebrow section-label">
          <span className="section-marker">01 /</span> Soluções prioritárias
        </p>
        <div>
          <h2 id="solutions-title">{content.solutions.title}</h2>
          <p className="section-intro">{content.solutions.intro}</p>
        </div>
      </div>
      <div className="service-list service-list-teaser">
        {services.map((service) => (
          <article className={`service service-${service.id}`} key={service.id}>
            <div className="service-number" aria-hidden="true">
              {service.number}
            </div>
            <div className="service-title">
              <p className="eyebrow">{service.category}</p>
              <h3>{service.title}</h3>
              <p className="service-note">{service.note}</p>
            </div>
            <div className="service-copy">
              <p>{service.description}</p>
              <Link className="service-link" href={`/servicos#servico-${service.id}`}>
                {service.cta}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <Link className="text-link" href="/servicos" data-reveal>
        Ver todos os serviços <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
