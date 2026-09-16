import { content } from "../../site-content";

export function FaqSection() {
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="faq container">
        <div className="faq-heading" data-reveal="left">
          <p className="eyebrow">Antes de começar</p>
          <h2 id="faq-title">
            Dúvidas
            <br /> frequentes.
          </h2>
        </div>
        <div className="faq-list">
          {content.faq.map((item, index) => (
            <details key={item.question} data-reveal data-reveal-delay={index * 40}>
              <summary>
                <span className="faq-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <span>{item.question}</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
