import Link from "next/link";
import { content, whatsappUrl } from "../../site-content";
import { Architecture } from "../architecture";

export function HeroSection() {
  return (
    <>
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
            <Link className="text-link" href="/portfolio">
              Ver serviços realizados <span aria-hidden="true">↓</span>
            </Link>
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
    </>
  );
}
