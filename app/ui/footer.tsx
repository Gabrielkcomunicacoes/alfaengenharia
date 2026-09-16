import Link from "next/link";
import { company, whatsappUrl } from "../site-content";
import { OfficialLogo } from "./official-logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main" data-reveal>
          <div>
            <Link href="/" className="footer-brand" aria-label="Alfa Engenharia, voltar ao início">
              <OfficialLogo decorative />
            </Link>
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
            <a href={company.instagram} target="_blank" rel="noopener noreferrer">
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
          <a className="back-top" href="#conteudo">
            Voltar ao início <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
