import Link from "next/link";
import { content } from "../../site-content";

export function PreparationSection() {
  return (
    <section className="preparation surface-white" aria-labelledby="preparation-title">
      <div className="container preparation-grid">
        <div className="preparation-copy" data-reveal>
          <p className="eyebrow">{content.preparation.eyebrow}</p>
          <h2 id="preparation-title">{content.preparation.title}</h2>
          <p>{content.preparation.description}</p>
          <Link className="text-link" href="/contato">
            Preencher minha solicitação <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <ol className="preparation-list">
          {content.preparation.items.map((item, index) => (
            <li key={item.title} data-reveal data-reveal-delay={index * 40}>
              <span className="preparation-number" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
