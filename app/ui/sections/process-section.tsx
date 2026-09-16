import Link from "next/link";
import { content } from "../../site-content";

export function ProcessSection() {
  return (
    <section
      className="process container section-space"
      id="como-contratar"
      tabIndex={-1}
      aria-labelledby="process-title"
    >
      <div className="section-heading" data-reveal>
        <p className="eyebrow section-label">
          <span className="section-marker">04 /</span> Como contratar
        </p>
        <div>
          <h2 id="process-title">{content.process.title}</h2>
        </div>
      </div>
      <ol className="process-steps">
        {content.process.steps.map((step, index) => (
          <li key={step.title} data-reveal data-reveal-delay={index * 60}>
            <div className="step-top">
              <span>0{index + 1}</span>
              <span aria-hidden="true">{index < 2 ? "→" : "↗"}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <p className="step-detail">{step.detail}</p>
          </li>
        ))}
      </ol>
      <div className="process-bottom" data-reveal>
        <p>{content.process.note}</p>
        <Link className="text-link" href="/contato">
          Apresentar minha demanda <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
