import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";

const LANGUAGES = [
  "Español (nativo)",
  "Inglés (lectura técnica)",
  "Valenciano (avanzado)",
];

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="sobre-mi"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div
        ref={ref}
        className={StringUtils.JoinClassName(
          "reveal max-w-2xl flex flex-col gap-6",
          visible ? "reveal-visible" : undefined,
        )}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-text">
          Sobre mí
        </h2>
        <p className="text-lg text-text-muted leading-relaxed">
          Soy QA Analyst especializado en automatización de pruebas y
          accesibilidad. Audito accesibilidad web y mobile combinando testing
          automatizado, semiautomatizado y manual, y trabajo con Java, Selenium
          y Cucumber en entornos CI/CD, participando en el diseño y
          mantenimiento de frameworks de testing y herramientas internas. Soy
          autónomo, técnico y estoy orientado a la mejora continua.
        </p>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((language) => (
            <span
              key={language}
              className="text-sm text-text-muted bg-surface-alt border border-border rounded-full px-3 py-1"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
