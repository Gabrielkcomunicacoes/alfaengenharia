import { content } from "../../site-content";

export function AboutSection() {
  return (
    <section className="about" id="a-alfa" tabIndex={-1} aria-labelledby="about-title">
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
        <div className="about-copy" data-reveal="right" data-reveal-delay="80">
          <h2 id="about-title">{content.about.title}</h2>
          <p>{content.about.description}</p>
          <section className="technical-team" aria-labelledby="team-title">
            <h3 className="eyebrow" id="team-title">
              Responsáveis técnicos
            </h3>
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
      <div className="container mission-block">
        <p className="eyebrow">{content.mission.eyebrow}</p>
        <h3 className="mission-title">{content.mission.title}</h3>
        <div className="mission-grid">
          {content.mission.items.map((item, index) => (
            <div key={item.title} data-reveal data-reveal-delay={index * 60}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="about-bottom container" data-reveal>
        <span>Engenharia feita por pessoas.</span>
        <span>Atuação em Manaus e no interior do Amazonas.</span>
      </div>
    </section>
  );
}
