/* eslint-disable @next/next/no-img-element -- Fotografias locais otimizadas, com dimensões explícitas. */
import Link from "next/link";
import { WaveDivider } from "../wave-divider";
import { company, content, whatsappUrl } from "../../site-content";

const photo = (id: string, small = true) =>
  `/images/portfolio/servicos/${id}${small ? "-640" : ""}.webp`;

const mosaic = [
  { id: "manutencao-fachada", width: 1200, height: 1600, alt: "Plataforma elevatória junto à fachada de um galpão.", className: "tall" },
  { id: "inspecao-casa-de-bombas", width: 900, height: 1600, alt: "Profissional operando o painel de uma bomba de incêndio.", className: "" },
  { id: "soldagem-tubulacoes", width: 960, height: 1280, alt: "Profissional executando soldagem em tubulação.", className: "" },
  { id: "infraestrutura-predial", width: 900, height: 1600, alt: "Obra com dutos e tubulações aparentes no teto.", className: "tall" },
  { id: "teste-motor-bomba", width: 900, height: 1600, alt: "Profissionais fazendo medição elétrica em um motor.", className: "" },
  { id: "montagem-tubulacoes", width: 960, height: 1280, alt: "Montagem e soldagem de tubulação junto ao equipamento.", className: "" },
] as const;

const pillars = [
  { label: "Civil", text: "Manutenção predial, obras e reformas, pintura e fachadas." },
  { label: "Elétrica", text: "Instalações elétricas para equipamentos e manutenção elétrica." },
  { label: "Mecânica", text: "Torres de resfriamento, análise de vibração, soldagem e montagens." },
  { label: "Incêndio", text: "Manutenção, inspeções e testes em sistemas de combate a incêndio." },
];

function initials(name: string) {
  const parts = name.split(" ");
  return `${parts[0][0]}${parts[parts.length - 1][0]}`;
}

export function AboutPage() {
  const years = new Date().getFullYear() - new Date(company.founded).getFullYear();

  return (
    <>
      <section className="about-story section-space" id="a-alfa" tabIndex={-1} aria-labelledby="story-title">
        <div className="container about-story-grid">
          <div className="about-story-photos" data-reveal="left">
            <img
              className="story-main"
              src={photo("equipe-manutencao-bombas", false)}
              width={900}
              height={1600}
              alt="Equipe da Alfa Engenharia, com uniforme da empresa, em manutenção de bombas."
            />
            <img
              className="story-side"
              src={photo("servicos-fachada")}
              width={1200}
              height={1600}
              loading="lazy"
              alt="Serviço em fachada com plataforma elevatória."
            />
            <div className="story-badge">
              <strong>{years}</strong>
              <span>anos de atuação</span>
            </div>
          </div>
          <div className="about-story-copy" data-reveal="right" data-reveal-delay="80">
            <p className="eyebrow">Nossa história</p>
            <h2 id="story-title">{content.about.title}</h2>
            <span className="title-rule" aria-hidden="true" />
            <p className="story-quote">“{content.about.quote}”</p>
            {content.about.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="story-facts">
              <li>
                <strong>Desde 2013</strong>
                <span>Empresa amazonense</span>
              </li>
              <li>
                <strong>{company.companyCrea}</strong>
                <span>Registro da empresa</span>
              </li>
              <li>
                <strong>Manaus/AM</strong>
                <span>Sede e atendimento regional</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-pillars" aria-labelledby="pillars-title">
        <div className="container">
          <div className="title-block title-block-light" data-reveal>
            <h2 id="pillars-title">Quatro frentes de engenharia</h2>
            <span className="title-rule" aria-hidden="true" />
            <p>Uma equipe, quatro áreas de atuação, coordenação técnica em cada obra.</p>
          </div>
          <ul className="pillars-grid">
            {pillars.map((pillar, index) => (
              <li key={pillar.label} data-reveal data-reveal-delay={index * 60}>
                <span className="pillar-number" aria-hidden="true">0{index + 1}</span>
                <h3>{pillar.label}</h3>
                <p>{pillar.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-mission section-space" aria-labelledby="mission-title">
        <div className="container">
          <div className="title-block" data-reveal>
            <p className="eyebrow">{content.mission.eyebrow}</p>
            <h2 id="mission-title">{content.mission.title}</h2>
            <span className="title-rule" aria-hidden="true" />
          </div>
          <div className="mission-cards">
            {content.mission.items.map((item, index) => (
              <article key={item.title} data-reveal data-reveal-delay={index * 60}>
                <span className="mission-index" aria-hidden="true">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team section-space" aria-labelledby="team-title">
        <div className="container">
          <div className="title-block" data-reveal>
            <p className="eyebrow">Responsáveis técnicos</p>
            <h2 id="team-title">Quem assina a obra.</h2>
            <span className="title-rule" aria-hidden="true" />
            <p>
              Engenheiros com registro no CREA/AM acompanham as obras e respondem
              pela qualidade técnica e pela segurança de cada serviço.
            </p>
          </div>
          <ul className="team-cards">
            {content.about.team.map((member, index) => (
              <li key={member.registration} data-reveal data-reveal-delay={index * 70}>
                <span className="team-avatar" aria-hidden="true">{initials(member.name)}</span>
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <span className="team-registration">{member.registration}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-commit" aria-labelledby="commit-title">
        <div className="container">
          <h2 id="commit-title" className="visually-hidden">Nossos compromissos</h2>
          <div className="commit-row">
            {content.about.commitments.map((item, index) => (
              <div key={item.title} data-reveal data-reveal-delay={index * 60}>
                <span className="eyebrow">0{index + 1} / Nosso compromisso</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-gallery section-space" aria-labelledby="gallery-title">
        <div className="container">
          <div className="title-block" data-reveal>
            <h2 id="gallery-title">A Alfa em campo</h2>
            <span className="title-rule" aria-hidden="true" />
            <p>Registros de serviços executados pela equipe.</p>
          </div>
          <div className="mosaic">
            {mosaic.map((item, index) => (
              <figure
                key={item.id}
                className={item.className}
                data-reveal
                data-reveal-delay={(index % 3) * 60}
              >
                <img
                  src={photo(item.id)}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  alt={item.alt}
                />
              </figure>
            ))}
          </div>
          <div className="about-gallery-link" data-reveal>
            <Link className="text-link" href="/portfolio">
              Ver portfólio completo <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutCta() {
  return (
    <section className="about-cta" aria-labelledby="cta-title">
      <div className="container about-cta-inner" data-reveal>
        <div>
          <h2 id="cta-title">Vamos cuidar da estrutura da sua empresa?</h2>
          <p>Apresente a sua demanda e receba um retorno da equipe da Alfa.</p>
        </div>
        <a
          className="button button-light"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp"
          data-location="about-cta"
        >
          Falar com a Alfa <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="about-cta-wave">
        <WaveDivider from="paper" to="red" />
      </div>
    </section>
  );
}
