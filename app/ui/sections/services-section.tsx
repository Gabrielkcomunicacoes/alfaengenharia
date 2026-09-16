import { content, services, whatsappUrl } from "../../site-content";

export function ServicesSection() {
  return (
    <section
      className="solutions container section-space"
      id="solucoes"
      tabIndex={-1}
      aria-labelledby="solutions-title"
    >
      <div className="section-heading" data-reveal>
        <p className="eyebrow section-label">
          <span className="section-marker">01 /</span> Soluções prioritárias
        </p>
        <div>
          <h2 id="solutions-title">{content.solutions.title}</h2>
          <p className="section-intro">{content.solutions.intro}</p>
        </div>
      </div>
      <nav className="solution-index" aria-label="Ir para uma solução" data-reveal>
        {services.map((service) => (
          <a key={service.id} href={`#servico-${service.id}`}>
            <span className="solution-index-number" aria-hidden="true">
              {service.number}
            </span>
            <span>{service.navigationTitle}</span>
            <span className="solution-index-arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        ))}
      </nav>
      <div className="service-list">
        {services.map((service) => (
          <article
            className={`service service-${service.id}`}
            key={service.id}
            id={`servico-${service.id}`}
            tabIndex={-1}
            data-reveal
            aria-labelledby={`title-${service.id}`}
          >
            <div className="service-number" aria-hidden="true">
              {service.number}
            </div>
            <div className="service-title">
              <p className="eyebrow">{service.category}</p>
              <h3 id={`title-${service.id}`}>{service.title}</h3>
              <p className="service-note">{service.note}</p>
            </div>
            <div className="service-copy">
              <p>{service.description}</p>
              <p className="service-detail">{service.detail}</p>
              <div className="service-start">
                <span className="eyebrow">Para começar a conversa</span>
                <p>{service.start}</p>
              </div>
              <a
                className="service-link"
                href={whatsappUrl(service.message)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp"
                data-location="service"
                data-service={service.id}
              >
                {service.cta}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <section className="contracting" aria-labelledby="contracting-title">
        <div className="contracting-heading" data-reveal>
          <div>
            <p className="eyebrow">{content.contracting.eyebrow}</p>
            <h3 id="contracting-title">{content.contracting.title}</h3>
          </div>
          <p>{content.contracting.description}</p>
        </div>
        <div className="contracting-options">
          {content.contracting.options.map((option, index) => (
            <div key={option.title} data-reveal data-reveal-delay={index * 70}>
              <span className="contracting-index" aria-hidden="true">
                {index === 0 ? "↻" : "↗"}
              </span>
              <p className="eyebrow">{option.label}</p>
              <h4>{option.title}</h4>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
        <a className="text-link" href="#como-contratar" data-reveal>
          Entender os próximos passos <span aria-hidden="true">↓</span>
        </a>
      </section>
      <section
        className="other-services"
        id="servicos-complementares"
        tabIndex={-1}
        aria-labelledby="other-services-title"
      >
        <div data-reveal="left">
          <p className="eyebrow">Outras frentes de atuação</p>
          <h3 id="other-services-title">{content.other.title}</h3>
          <p className="other-description">{content.other.description}</p>
          <p className="other-description">{content.other.note}</p>
        </div>
        <div className="complementary-groups" data-reveal="right">
          {content.other.groups.map((group, index) => (
            <div className="complementary-group" key={group.title}>
              <h4>
                <span className="other-number" aria-hidden="true">
                  0{index + 1}
                </span>
                {group.title}
              </h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
