import Card from "@components/cards/Card";
import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";

type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "DXC Technology",
    role: "QA Automation & Accessibility Analyst",
    location: "Alicante, España",
    period: "Agosto 2024 - Agosto 2026",
    bullets: [
      "Framework de automatización de accesibilidad web (Java, Selenium, Cucumber) con arquitectura de APIs e infraestructura en Docker.",
      "Auditorías de accesibilidad web y mobile: testing automatizado, semiautomatizado y manual, alineado con WCAG.",
      "Integración de pruebas de accesibilidad (Axe) en CI/CD.",
      "Mantenimiento de frameworks Selenium/Appium para un cliente internacional, con suites Cucumber sobre múltiples aplicaciones.",
      "Pipelines personalizados en Jenkins integrando SonarQube, GitLab y Jira para métricas de calidad y generación de tickets.",
      "Mentoría a 2 becarios en automatización de pruebas y buenas prácticas de accesibilidad.",
    ],
  },
  {
    company: "DXC Technology",
    role: "Software QA Intern – Accessibility & Testing Mobile",
    location: "Alicante, España",
    period: "Abril 2024 - Junio 2024",
    bullets: [
      "PoC de accesibilidad para un cliente del sector bancario: liderazgo del testing en dispositivos móviles y colaboración en pruebas web.",
      "Benchmark de herramientas de testing de accesibilidad web y mobile (precisión, calidad, compatibilidad).",
      "Informe técnico con estimaciones de coste y viabilidad de integración.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="min-h-screen px-6 py-24 flex flex-col items-center gap-12"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-text">
        Experiencia
      </h2>
      <div className="max-w-3xl w-full flex flex-col gap-8">
        {EXPERIENCE.map((entry, index) => (
          <ExperienceCard key={entry.period} entry={entry} index={index} />
        ))}
      </div>
    </section>
  );
}

type ExperienceCardProps = {
  entry: ExperienceEntry;
  index: number;
};

function ExperienceCard({ entry, index }: ExperienceCardProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={StringUtils.JoinClassName(
        "reveal",
        visible ? "reveal-visible" : undefined,
      )}
    >
      <Card className="flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold text-text">{entry.role}</h3>
            <p className="text-text-muted">
              {entry.company} · {entry.location}
            </p>
          </div>
          <span className="text-sm text-text-muted whitespace-nowrap">
            {entry.period}
          </span>
        </div>
        <ul className="list-disc pl-5 flex flex-col gap-1 text-text-muted">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
