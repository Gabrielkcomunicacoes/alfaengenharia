/* eslint-disable @next/next/no-img-element -- Fotografias locais otimizadas, com dimensões explícitas. */
import Link from "next/link";
import { portfolio } from "../../portfolio-content";

export function PortfolioTeaser() {
  return (
    <section className="portfolio container" aria-labelledby="portfolio-title">
      <div className="section-heading" data-reveal>
        <p className="eyebrow section-label">
          <span className="section-marker">02 /</span> Portfólio
        </p>
        <div>
          <h2 id="portfolio-title">O trabalho aparece nos detalhes.</h2>
          <p className="section-intro">
            Uma seleção de serviços executados pela Alfa. Veja comparativos de
            antes e depois de instalações, manutenção mecânica e trabalhos em
            fachadas.
          </p>
        </div>
      </div>
      <div className="portfolio-grid portfolio-grid-teaser">
        {portfolio.map((project) => (
          <article className="portfolio-project" key={project.id} data-reveal>
            <div className="project-images">
              {(["before", "after"] as const).map((stage) => {
                const photo = project[stage];
                return (
                  <figure className="project-photo" key={stage}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{stage === "before" ? "Antes" : "Depois"}</figcaption>
                  </figure>
                );
              })}
            </div>
            <div className="project-copy">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
      <Link className="text-link" href="/portfolio" data-reveal>
        Ver portfólio completo <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
