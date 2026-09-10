/* eslint-disable @next/next/no-img-element -- Fotografias locais com dimensões explícitas e versões responsivas. */
import "../work-gallery.css";

export type WorkPhoto = {
  id: string;
  originalSrc: string;
  src: string;
  srcSet?: string;
  width: number;
  height: number;
  alt: string;
  category: string;
  caption: string;
};

export function WorkGallery({ photos }: { photos: readonly WorkPhoto[] }) {
  if (photos.length === 0) return null;

  return (
    <section className="work-gallery" aria-labelledby="work-gallery-title">
      <div className="work-gallery-heading" data-reveal>
        <div>
          <p className="eyebrow">Registros dos serviços</p>
          <h3 id="work-gallery-title">A Alfa em campo.</h3>
        </div>
        <p>
          Instalações, manutenção mecânica e trabalhos em fachadas.
          Selecione uma foto para ver os detalhes.
        </p>
      </div>
      <div className="work-gallery-photos">
        {photos.map((photo) => (
          <figure className="work-photo" key={photo.id} data-reveal>
            <a
              href={photo.originalSrc}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${photo.caption} Ver foto original (abre em nova aba)`}
            >
              <img
                src={photo.src}
                srcSet={photo.srcSet}
                sizes="(max-width: 599px) 92vw, (max-width: 899px) 44vw, (max-width: 1400px) 29vw, 411px"
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
              />
              <span className="photo-expand" aria-hidden="true">↗</span>
            </a>
            <figcaption>
              <span className="eyebrow">{photo.category}</span>
              <p>{photo.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
