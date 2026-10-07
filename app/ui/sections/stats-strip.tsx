import { company } from "../../site-content";

export function StatsStrip() {
  const years = new Date().getFullYear() - new Date(company.founded).getFullYear();
  const stats = [
    { value: `${years}`, label: "anos de atuação em engenharia" },
    { value: "4", label: "áreas: civil, elétrica, mecânica e incêndio" },
    { value: "2", label: "engenheiros responsáveis com CREA/AM" },
    { value: "AM", label: "Manaus e interior do Amazonas" },
  ];

  return (
    <section className="stats-strip container" aria-label="A Alfa em números">
      <ul>
        {stats.map((stat, index) => (
          <li key={stat.label} data-reveal data-reveal-delay={index * 60}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
