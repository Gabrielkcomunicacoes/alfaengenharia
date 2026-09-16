import { company, content, whatsappUrl } from "../../site-content";
import { ContactForm } from "../contact-form";

const mapQuery = encodeURIComponent(
  `${company.street}, ${company.city}, ${company.postalCode}`,
);

export function ContactSection() {
  return (
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
              <a href={`mailto:${company.email}`} data-track="email" data-location="contact">
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
        <div className="contact-map" data-reveal>
          <iframe
            title="Localização da Alfa Engenharia"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", aspectRatio: "16 / 10", border: 0 }}
          />
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
