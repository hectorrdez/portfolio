import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";
import { Check, Eye } from "lucide-react";

const LANGUAGES = [
  { name: "Español", level: "NATIVO" },
  { name: "Valenciano", level: "AVANZADO" },
  { name: "Inglés", level: "TÉCNICO" },
];

const METHODOLOGY = [
  "Java",
  "Selenium",
  "Cucumber (BDD)",
  "Appium",
  "Docker",
  "Jenkins",
  "GitLab CI/CD",
  "SonarQube",
  "Jira",
  "Axe-core",
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
            01 // Trayectoria &amp; Enfoque
          </span>
          <h2 className="text-headline-lg text-on-surface tracking-tight">
            Sobre mí
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 flex flex-col gap-4 bg-surface-container p-6 rounded-xl justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-body-md text-on-surface">
                Soy QA Analyst especializado en automatización de pruebas y
                accesibilidad. Audito accesibilidad web y mobile combinando
                testing automatizado, semiautomatizado y manual, y trabajo con
                Java, Selenium y Cucumber en entornos CI/CD, participando en
                el diseño y mantenimiento de frameworks de testing y
                herramientas internas.
              </p>
              <p className="text-body-md text-on-surface-variant">
                Soy autónomo, técnico y estoy orientado a la mejora continua.
              </p>

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
                Ecosistema y metodología
              </span>
              <div className="flex flex-wrap gap-1.5">
                {METHODOLOGY.map((item) => (
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
