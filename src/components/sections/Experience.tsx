import Card from "@components/cards/Card";
import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";
import {
  BarChart3,
  Bot,
  FlaskConical,
  GitMerge,
  Layers,
  type LucideIcon,
  Puzzle,
  Rocket,
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
    company: "Proyectos propios",
    role: "Desarrollador full-stack · Creador de dev-harness-skills",
    location: "Alicante, España · Remoto",
    period: "Junio 2026 – Actualidad",
    current: true,
    highlights: [
      {
        icon: Bot,
        title: "Dev Harness Skills",
        text: "16 skills portables (Claude Code, Codex, Antigravity) que crean proyectos, especifican features inmutables, las prueban con un gate automático y las cierran con estado trazable. Incluye relevo entre CLIs y modelos locales cuando se acaba la cuota.",
      },
      {
        icon: Layers,
        title: "Ecosistema ScoutTech",
        text: "Cuenta central, frontends React, API Express + TypeScript, app Android (Kotlin), librería de UI pública, framework de tests Playwright + Appium + Cucumber, colecciones Bruno y pipelines Jenkins. Despliegue propio con Dokploy.",
      },
      {
        icon: Puzzle,
        title: "Claude Code Mods",
        text: "7 mods propios: panel de agentes, medidor de uso 5h/7d, barra de contexto, auto-clear y mejora de prompts.",
      },
      {
        icon: Rocket,
        title: "Portfolio feature a feature",
        text: "Portfolio personal construido feature a feature con el harness: 21 features, E2E por feature y accesibilidad cuidada.",
      },
    ],
    tags: [
      "TypeScript",
      "React 19",
      "Tailwind 4",
      "Node",
      "Express",
      "Playwright",
      "Docker",
      "Jenkins",
    ],
  },
  {
    company: "DXC Technology",
    role: "QA Automation & Accessibility Analyst",
    location: "Alicante / Internacional · Banca y Servicios Corporativos",
    period: "Agosto 2024 – Actualidad",
    current: true,
    highlights: [
      {
        icon: Settings2,
        title: "Framework de accesibilidad web",
        text: "Desarrollé y mantuve un framework de testing de accesibilidad web (Java, Selenium, Cucumber) con API propia e infraestructura en Docker, alineado con WCAG.",
      },
      {
        icon: ShieldCheck,
        title: "Accesibilidad en CI/CD",
        text: "Integré axe en CI/CD para que las auditorías de accesibilidad corrieran en cada ejecución y no a mano.",
      },
      {
        icon: GitMerge,
        title: "Pipelines Jenkins",
        text: "Diseñé pipelines Jenkins que conectan SonarQube, GitLab y Jira: extraen métricas de calidad y abren tickets sin intervención manual.",
      },
      {
        icon: Smartphone,
        title: "Automatización web y móvil",
        text: "Mantuve frameworks Selenium/Appium con suites Cucumber en varias aplicaciones de un cliente internacional.",
      },
      {
        icon: Users,
        title: "Mentoría",
        text: "Mentoricé a 2 becarios en automatización y buenas prácticas de accesibilidad.",
      },
      {
        icon: Bot,
        title: "IA en el día a día",
        text: "Usé IA de forma sistemática en el día a día (generación de tests, revisión, documentación).",
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
            Trayectoria técnica
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
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      aria-label={entry.role}
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
                {entry.company.toUpperCase()}
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
    </article>
  );
}
