import { content } from "../../site-content";

export function DifferentialsSection() {
  return (
    <section className="differentials container" aria-labelledby="differentials-title">
      <div className="section-heading" data-reveal>
        <p className="eyebrow section-label">{content.differentials.eyebrow}</p>
        <div>
          <h2 id="differentials-title">{content.differentials.title}</h2>
        </div>
      </div>
      <ul className="differentials-grid">
        {content.differentials.items.map((item, index) => (
          <li key={item.title} data-reveal data-reveal-delay={index * 60}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
