/* eslint-disable @next/next/no-img-element -- Fotografias locais otimizadas, com dimensões explícitas e acesso ao arquivo original. */
import Link from "next/link";
import { portfolio } from "../portfolio-content";
import { workPhotos } from "../work-photos";
import { WorkGallery } from "./work-gallery";

export function Portfolio() {
  return (
    <section
      className="portfolio container"
      id="portfolio"
      tabIndex={-1}
      aria-labelledby="portfolio-title"
    >
      <div className="section-heading" data-reveal>
        <p className="eyebrow section-label">
          <span className="section-marker">02 /</span> Portfólio
        </p>
        <div>
          <h2 id="portfolio-title">O trabalho aparece nos detalhes.</h2>
          <p className="section-intro">
            Uma seleção de serviços executados pela Alfa. Veja comparativos
            de antes e depois e registros de instalações, manutenção mecânica
            e trabalhos em fachadas.
          </p>
        </div>
      </div>
      <div className="portfolio-grid">
        {portfolio.map((project, index) => (
          <article
            className={`portfolio-project${index === 0 ? " portfolio-featured" : ""}`}
            key={project.id}
            aria-labelledby={`project-${project.id}`}
            data-reveal
          >
            <div className="project-images">
              {(["before", "after"] as const).map((stage) => {
                const photo = project[stage];
                const label = stage === "before" ? "Antes" : "Depois";
                return (
                  <figure className="project-photo" key={stage}>
                    <a
                      href={photo.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.category}: ver foto de ${label.toLowerCase()} em tamanho original (abre em nova aba)`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="photo-expand" aria-hidden="true">↗</span>
                    </a>
                    <figcaption>{label}</figcaption>
                  </figure>
                );
              })}
            </div>
            <div className="project-copy">
              <p className="eyebrow">{project.category}</p>
              <h3 id={`project-${project.id}`}>{project.title}</h3>
              <p>{project.description}</p>
              <Link
                className="text-link"
                href={
                  project.service === "complementares"
                    ? "/servicos#servicos-complementares"
                    : `/servicos#servico-${project.service}`
                }
              >
                {project.link} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <WorkGallery photos={workPhotos} />
      <div className="portfolio-bottom" data-reveal>
        <p>Fotos do portfólio da Alfa Engenharia. Selecione uma foto para ampliar.</p>
        <Link className="text-link" href="/contato">
          Vamos cuidar da sua estrutura? <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
