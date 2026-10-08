import { company } from "../../site-content";
import { CountUp } from "../count-up";

export function StatsStrip() {
  const years = new Date().getFullYear() - new Date(company.founded).getFullYear();
  const stats = [
    { value: years, label: "Anos de atuação" },
    { value: 4, label: "Áreas de engenharia" },
    { value: 2, label: "Engenheiros responsáveis" },
  ];

  return (
    <section className="numbers-home section-space" aria-labelledby="numbers-title">
      <div className="container">
        <div className="title-block title-block-light" data-reveal>
          <h2 id="numbers-title">Nossos números</h2>
          <span className="title-rule" aria-hidden="true" />
          <p>Nos orgulhamos da nossa trajetória.</p>
        </div>
        <ul className="number-cards">
          {stats.map((stat, index) => (
            <li key={stat.label} data-reveal data-reveal-delay={index * 60}>
              <strong>
                +<CountUp value={stat.value} />
              </strong>
              <span className="title-rule" aria-hidden="true" />
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
