import Link from "next/link";
import { content } from "../../site-content";

export function AboutTeaser() {
  return (
    <section className="about" aria-labelledby="about-title">
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
        </div>
        <div className="about-copy" data-reveal="right" data-reveal-delay="80">
          <h2 id="about-title">{content.about.title}</h2>
          <p>{content.about.description}</p>
          <ul className="about-team-names">
            {content.about.team.map((member) => (
              <li key={member.registration}>
                <strong>{member.name}</strong> — {member.role}
              </li>
            ))}
          </ul>
          <Link className="text-link" href="/sobre">
            Conhecer a Alfa <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
