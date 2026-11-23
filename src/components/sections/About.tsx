import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";
import { Check, Eye } from "lucide-react";

const LANGUAGES = [
  { name: "Español", level: "NATIVO" },
  { name: "Valenciano", level: "AVANZADO" },
  { name: "Inglés", level: "TÉCNICO" },
];

const STACK = [
  "TypeScript",
  "React 19",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Playwright",
  "Docker",
  "Jenkins",
  "Selenium",
  "Cucumber",
  "Axe-core",
];

const WHAT_I_DO = [
  "Construyo apps completas: React 19 y Tailwind en el front, Express y TypeScript en el back.",
  "Cada feature entra con su test E2E (Playwright) y pasa un gate de typecheck, lint, build y tests.",
  "Diseñé un harness de desarrollo con IA: 16 skills portables para Claude Code, Codex y Antigravity.",
];

const PHILOSOPHY_POINTS = [
  "Auditorías WCAG 2.1 y 2.2",
  "Testing con lectores de pantalla y navegación por teclado",
  "Validación de foco visible y trampas de teclado",
  "Integración de informes Axe en la compilación",
];

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="sobre-mi"
      className="min-h-screen flex items-center px-4 sm:px-8 py-24"
    >
      <div
        ref={ref}
        className={StringUtils.JoinClassName(
          "reveal w-full max-w-6xl mx-auto flex flex-col gap-6",
          visible ? "reveal-visible" : undefined,
        )}
      >
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-mono text-code-sm uppercase tracking-widest text-primary">
            01 // Full-Stack Developer · desarrollo con agentes de IA
          </span>
          <h2 className="text-headline-lg text-on-surface tracking-tight">
            Sobre mí
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 flex flex-col gap-4 bg-surface-container p-6 rounded-xl justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-body-md text-on-surface">
                Si tu equipo quiere entregar más rápido con agentes de IA sin
                que la calidad se resienta, hablamos el mismo idioma.
              </p>
              <p className="text-body-md text-on-surface-variant">
                Vengo de QA Automation y accesibilidad en DXC Technology, así
                que desarrollo pensando en cómo se rompe lo que construyo. Hoy
                trabajo como desarrollador full-stack con TypeScript, React y
                Node, apoyado en agentes de IA que yo mismo oriento y verifico.
              </p>

              <ul className="flex flex-col gap-2 text-body-sm text-on-surface-variant">
                {WHAT_I_DO.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check
                      size={18}
                      className="text-secondary shrink-0 mt-0.5"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 pt-1">
                <span className="font-mono text-code-sm text-outline uppercase tracking-wider">
                  Competencias lingüísticas
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {LANGUAGES.map((language) => (
                    <div
                      key={language.name}
                      className="p-3 bg-surface-container-high rounded-lg flex flex-col gap-0.5"
                    >
                      <span className="text-headline-sm text-on-surface">
                        {language.name}
                      </span>
                      <span className="font-mono text-label-md text-secondary">
                        {language.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="font-mono text-code-sm text-outline uppercase tracking-wider block mb-2">
                Stack y herramientas
              </span>
              <div className="flex flex-wrap gap-1.5">
                {STACK.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 bg-surface-container-high text-on-surface font-mono text-code-sm rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-surface-container-high gap-4">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                <Eye size={24} aria-hidden />
              </div>
              <h3 className="text-headline-md text-on-surface tracking-tight">
                «La accesibilidad no es un checklist, es calidad de software»
              </h3>
              <ul className="flex flex-col gap-2 text-on-surface font-mono text-code-sm">
                {PHILOSOPHY_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check
                      size={18}
                      className="text-secondary shrink-0 mt-0.5"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
