import { company, content, services, whatsappUrl } from "./site-content";
import { Architecture } from "./ui/architecture";
import { Header } from "./ui/header";
import { ContactForm } from "./ui/contact-form";
import { SiteEnhancements } from "./ui/site-enhancements";
import { WaveDivider } from "./ui/wave-divider";
import { OfficialLogo } from "./ui/official-logo";
import { Portfolio } from "./ui/portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-kicker" data-reveal>
            <div className="eyebrow">
              <span className="signal" />
              {content.hero.eyebrow}
            </div>
            <span className="hero-edition">MANAUS, AMAZONAS · DESDE 2013</span>
          </div>
          <div className="hero-grid">
            <h1 id="hero-title" data-reveal>
              <span className="hero-line">Engenharia e manutenção</span>{" "}
              <span className="hero-line hero-emphasis">para a estrutura</span>{" "}
              <span className="hero-line">da sua empresa.</span>
            </h1>
            <div className="hero-aside" data-reveal data-reveal-delay="80">
              <p>{content.hero.description}</p>
              <a
                className="button"
                href={whatsappUrl(content.hero.message)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp"
                data-location="hero"
              >
                Conversar sobre meu projeto <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#portfolio">
                Ver serviços realizados <span aria-hidden="true">↓</span>
              </a>
              <p className="location-note">
                <span aria-hidden="true">↳</span> Atendimento a empresas em
                Manaus e no interior do Amazonas.
              </p>
            </div>
          </div>
          <Architecture />
        </section>
        <div className="credibility container" data-reveal>
          <p>
            <strong>Desde 2013</strong>
            <span>Engenharia e trabalho real.</span>
          </p>
          <p>
            Engenharia civil,
            <br /> elétrica e mecânica
          </p>
          <p>
            Obras coordenadas por
            <br /> <strong>engenheiro e encarregado</strong>
          </p>
        </div>
        <WaveDivider from="paper" to="white" />
        <div className="surface-white">
          <section
            className="solutions container section-space"
            id="solucoes"
            tabIndex={-1}
            aria-labelledby="solutions-title"
          >
            <div className="section-heading" data-reveal>
              <p className="eyebrow section-label">
                <span className="section-marker">01 /</span> Soluções
                prioritárias
              </p>
              <div>
                <h2 id="solutions-title">{content.solutions.title}</h2>
                <p className="section-intro">{content.solutions.intro}</p>
              </div>
            </div>
            <nav
              className="solution-index"
              aria-label="Ir para uma solução"
              data-reveal
            >
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
            <section
              className="contracting"
              aria-labelledby="contracting-title"
            >
              <div className="contracting-heading" data-reveal>
                <div>
                  <p className="eyebrow">{content.contracting.eyebrow}</p>
                  <h3 id="contracting-title">{content.contracting.title}</h3>
                </div>
                <p>{content.contracting.description}</p>
              </div>
              <div className="contracting-options">
                {content.contracting.options.map((option, index) => (
                  <div
                    key={option.title}
                    data-reveal
                    data-reveal-delay={index * 70}
                  >
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
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </section>
          <Portfolio />
        </div>
        <WaveDivider from="white" to="ink" reverse />
        <section
          className="about"
          id="a-alfa"
          tabIndex={-1}
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div className="about-statement" data-reveal="left">
              <p className="eyebrow">
                <span className="section-marker">03 /</span> A Alfa
              </p>
              <div className="since">
                <span>DESDE</span>
                <strong>
                  2013<span aria-hidden="true">.</span>
                </strong>
              </div>
              <div className="about-disciplines">
                <span>Civil</span>
                <span>Elétrica</span>
                <span>Mecânica</span>
              </div>
              <p className="about-foundation">
                Uma trajetória nas áreas civil,
                <br /> elétrica e mecânica.
              </p>
            </div>
            <div
              className="about-copy"
              data-reveal="right"
              data-reveal-delay="80"
            >
              <h2 id="about-title">{content.about.title}</h2>
              <p>{content.about.description}</p>
              <section className="technical-team" aria-labelledby="team-title">
                <h3 className="eyebrow" id="team-title">Responsáveis técnicos</h3>
                <ul>
                  {content.about.team.map((member) => (
                    <li key={member.registration}>
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                      <span className="team-registration">{member.registration}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
          <div className="about-commitments container">
            {content.about.commitments.map((item, index) => (
              <div key={item.title} data-reveal data-reveal-delay={index * 60}>
                <span className="eyebrow">0{index + 1} / Nosso compromisso</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="about-bottom container" data-reveal>
            <span>Engenharia feita por pessoas.</span>
            <span>Atuação em Manaus e no interior do Amazonas.</span>
          </div>
        </section>
        <WaveDivider from="ink" to="paper" />
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
            <a className="text-link" href="#contato">
              Conversar sobre o atendimento <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
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
            <a className="text-link" href="#contato">
              Apresentar minha demanda <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <WaveDivider from="paper" to="white" reverse />
        <section
          className="preparation surface-white"
          aria-labelledby="preparation-title"
        >
          <div className="container preparation-grid">
            <div className="preparation-copy" data-reveal>
              <p className="eyebrow">{content.preparation.eyebrow}</p>
              <h2 id="preparation-title">{content.preparation.title}</h2>
              <p>{content.preparation.description}</p>
              <a className="text-link" href="#contato">
                Preencher minha solicitação <span aria-hidden="true">↓</span>
              </a>
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
                <details
                  key={item.question}
                  data-reveal
                  data-reveal-delay={index * 40}
                >
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
        <WaveDivider from="white" to="paper" />
        <section
          className="contact container section-space"
          id="contato"
          tabIndex={-1}
          aria-labelledby="contact-title"
        >
          <div className="contact-copy" data-reveal>
            <p className="eyebrow">
              <span className="section-marker">05 /</span> Vamos conversar
            </p>
            <h2 id="contact-title">{content.contact.title}</h2>
            <p className="section-intro">{content.contact.description}</p>
            <dl className="contact-details">
              <div>
                <dt>WhatsApp comercial</dt>
                <dd>
                  <a
                    className="contact-phone"
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="whatsapp"
                    data-location="contact"
                  >
                    {company.phone}
                    <span aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a
                    href={`mailto:${company.email}`}
                    data-track="email"
                    data-location="contact"
                  >
                    {company.email}
                    <span aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt>Região de atendimento</dt>
                <dd>{company.region}</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </section>
      </main>
      <WaveDivider from="paper" to="white" reverse />
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main" data-reveal>
            <div>
              <a
                href="#"
                className="footer-brand"
                aria-label="Alfa Engenharia, voltar ao início"
              >
                <OfficialLogo decorative />
              </a>
              <p>
                Engenharia civil, elétrica e mecânica.
                <br />
                Desde 2013, em Manaus.
              </p>
            </div>
            <div>
              <h2>Endereço</h2>
              <address>
                {company.street}
                <br />
                {company.city} · CEP {company.postalCode}
              </address>
            </div>
            <div>
              <h2>Contato</h2>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp"
                data-location="footer"
              >
                {company.phone} ↗
              </a>
              <a
                className="footer-email"
                href={`mailto:${company.email}`}
                data-track="email"
                data-location="footer"
              >
                {company.email}
              </a>
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram · {company.instagramLabel} ↗
              </a>
            </div>
          </div>
          <div className="footer-bottom" data-reveal>
            <p>
              {company.legalName}
              <br />
              <span>
                CNPJ {company.cnpj} · Registro da empresa: {company.companyCrea}
              </span>
            </p>
            <a className="back-top" href="#">
              Voltar ao início <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>
      <SiteEnhancements />
    </>
  );
}
