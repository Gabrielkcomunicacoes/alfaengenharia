/* eslint-disable @next/next/no-img-element -- Arte local otimizada com dimensões e versões responsivas explícitas. */
import { approvedMedia, illustrativeMedia } from "../site-content";
import { OfficialLogo } from "./official-logo";

export function Architecture() {
  const approved = approvedMedia.hero;
  const picture = approved ?? illustrativeMedia.hero;
  return (
    <figure className="architecture">
      <div className="architecture-frame">
        <img
          data-reveal="image"
          src={picture.src}
          srcSet={
            !approved
              ? `${illustrativeMedia.hero.small} 960w, ${picture.src} 2172w`
              : undefined
          }
          sizes="(max-width: 599px) 100vw, (max-width: 1400px) 92vw, 1280px"
          alt={approved?.alt ?? ""}
          width={picture.width}
          height={picture.height}
          fetchPriority="high"
        />
        <span className="architecture-index" aria-hidden="true">
          <OfficialLogo variant="symbol" decorative />
        </span>
      </div>
      <figcaption className="architecture-caption" data-reveal>
        <span>Estrutura · Sistemas · Execução</span>
        <span>Precisão técnica. Trabalho real.</span>
      </figcaption>
    </figure>
  );
}
