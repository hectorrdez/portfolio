import Card from "@components/cards/Card";
import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";
import {
  BarChart3,
  FlaskConical,
  type LucideIcon,
  Settings2,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";

type Highlight = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  highlights: Highlight[];
  tags?: string[];
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "DXC Technology",
    role: "QA Automation & Accessibility Analyst",
    location: "Alicante / Internacional · Banca y Servicios Corporativos",
    period: "Agosto 2024 – Agosto 2026",
    current: true,
    highlights: [
      {
        icon: Settings2,
        title: "Framework de Accesibilidad en Java",
        text: "Arquitectura de APIs e infraestructura en Docker para un framework de automatización con Selenium WebDriver y Cucumber (BDD).",
      },
      {
        icon: ShieldCheck,
        title: "Gates de Calidad en CI/CD",
        text: "Integración de pruebas de accesibilidad (Axe) en CI/CD, alineado con criterios WCAG.",
      },
      {
        icon: Smartphone,
        title: "Automatización Móvil Multiplataforma",
        text: "Mantenimiento de frameworks Selenium/Appium para un cliente internacional, con suites Cucumber sobre múltiples aplicaciones.",
      },
      {
        icon: Users,
        title: "Gestión, Trazabilidad y Mentoring",
        text: "Pipelines Jenkins con SonarQube, GitLab y Jira; mentoría a 2 becarios en automatización de pruebas y buenas prácticas de accesibilidad.",
      },
    ],
    tags: [
      "Java",
      "Selenium",
      "Cucumber",
      "Appium",
      "Docker",
      "GitLab CI",
      "Jenkins",
      "Axe-core",
    ],
  },
  {
    company: "DXC Technology",
    role: "Software QA Intern – Accessibility & Testing Mobile",
    location: "Alicante · División de Banca",
    period: "Abril 2024 – Junio 2024",
    current: false,
    highlights: [
      {
        icon: FlaskConical,
        title: "PoC de Accesibilidad Bancaria",
        text: "Liderazgo del testing en dispositivos móviles y colaboración en pruebas web para un cliente del sector bancario.",
      },
      {
        icon: BarChart3,
        title: "Benchmark de Herramientas de Testing",
        text: "Análisis comparativo de herramientas de accesibilidad web y mobile (precisión, calidad, compatibilidad) e informe técnico con estimaciones de coste.",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="min-h-screen px-4 sm:px-8 py-24 flex flex-col gap-8"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-mono text-code-sm uppercase tracking-widest text-primary">
            02 // Experiencia Laboral
          </span>
          <h2 className="text-headline-lg text-on-surface tracking-tight">
            Trayectoria técnica en DXC Technology
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((entry, index) => (
            <ExperienceCard key={entry.period} entry={entry} index={index} />
          ))}
        </div>
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
      <Card className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-headline-md text-on-surface">
                {entry.role}
              </h3>
              <span
                className={StringUtils.JoinClassName(
                  "px-2 py-0.5 rounded font-mono text-label-md",
                  entry.current
                    ? "bg-primary-container text-on-primary-container"
                    : "bg-surface-container-highest text-on-surface",
                )}
              >
                DXC TECHNOLOGY
              </span>
            </div>
            <span className="text-body-sm text-outline">
              {entry.location}
            </span>
          </div>
          <span className="font-mono text-code-md text-secondary bg-surface-container-high px-3 py-1.5 rounded-lg self-start md:self-auto whitespace-nowrap">
            {entry.period}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {entry.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="flex items-start gap-2 bg-surface-container-high p-3 rounded-lg"
            >
              <highlight.icon
                size={20}
                className="text-primary shrink-0 mt-0.5"
                aria-hidden
              />
              <div className="text-body-sm text-on-surface-variant">
                <strong className="text-on-surface block font-semibold mb-0.5">
                  {highlight.title}
                </strong>
                {highlight.text}
              </div>
            </div>
          ))}
        </div>

        {entry.tags && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="font-mono text-code-sm text-outline">
              Tecnologías operativas:
            </span>
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-code-sm px-1.5 py-0.5 bg-surface-container-lowest rounded text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
