import Link from "next/link";
import { content } from "../../site-content";

export function RegionSection() {
  return (
    <section className="region container" aria-labelledby="region-title">
      <div className="region-visual" aria-hidden="true" data-reveal="left">
        <span className="region-code">AM</span>
        <div className="region-caption">
          <span>Manaus</span>
          <span>Amazonas / Brasil</span>
        </div>
      </div>
      <div className="region-copy" data-reveal="right">
        <p className="eyebrow">{content.region.eyebrow}</p>
        <h2 id="region-title">{content.region.title}</h2>
        <p>{content.region.description}</p>
        <p className="region-note">{content.region.note}</p>
        <Link className="text-link" href="/contato">
          Conversar sobre o atendimento <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
