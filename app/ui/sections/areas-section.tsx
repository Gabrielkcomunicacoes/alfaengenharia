import Link from "next/link";
import { content } from "../../site-content";

export function AreasSection() {
  return (
    <section className="areas container" aria-labelledby="areas-title">
      <div className="section-heading" data-reveal>
        <p className="eyebrow section-label">{content.areas.eyebrow}</p>
        <div>
          <h2 id="areas-title">{content.areas.title}</h2>
          <p className="section-intro">{content.areas.intro}</p>
        </div>
      </div>
      <div className="areas-grid">
        {content.areas.items.map((area, index) => (
          <div className="area-card" key={area.title} data-reveal data-reveal-delay={index * 60}>
            <span className="area-number" aria-hidden="true">
              0{index + 1}
            </span>
            <h3>{area.title}</h3>
            <ul>
              {area.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link className="text-link" href="/contato" data-reveal>
        Solicitar um orçamento <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
