import Button from "@components/controls/Button";
import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";
import { ChevronDown, Hand, MapPin, Settings2 } from "lucide-react";

export default function Hero() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-8 py-24"
    >
      <div
        ref={ref}
        className={StringUtils.JoinClassName(
          "reveal w-full max-w-6xl mx-auto flex flex-col gap-6",
          visible ? "reveal-visible" : undefined,
        )}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1.5 rounded-full bg-surface-container-high text-primary font-mono text-code-md">
            QA Analyst · Test Automation &amp; Web/Mobile Accessibility
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-mono text-code-sm">
            <MapPin size={14} className="text-primary" aria-hidden />
            Alicante, España
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <h1 className="text-headline-xl-mobile sm:text-headline-xl text-on-surface tracking-tight">
              Héctor Rodríguez Tovar
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Ingeniería de pruebas automatizadas y accesibilidad digital.
              Construyo software robusto e inclusivo con{" "}
              <span className="text-on-surface font-semibold">
                Java, Selenium, Cucumber y Appium
              </span>{" "}
              integrados en pipelines de CI/CD.
            </p>

            <div
              aria-label="Herramientas de automatización y accesibilidad"
              className="w-full rounded-xl bg-surface-container-lowest p-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-error-container" />
                <span className="w-3 h-3 rounded-full bg-tertiary-container" />
                <span className="w-3 h-3 rounded-full bg-secondary-container" />
                <span className="font-mono text-code-sm text-outline ml-2">
                  qa-automation-runner --profile=accessibility
                </span>
              </div>
              <p className="font-mono text-code-sm text-on-surface-variant pt-1">
                Java · Selenium · Cucumber · Appium · Axe-core · Docker
              </p>
              <p className="font-mono text-code-sm text-outline">
                Accesibilidad y automatización integradas en cada pipeline,
                no como una fase aparte.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                onClick={() =>
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contactar conmigo
              </Button>
              <a
                href="/cv/HectorRodriguezTovar_cv.pdf"
                download="HectorRodriguezTovar_cv.pdf"
                aria-label="Descargar CV en PDF"
                className="inline-flex items-center justify-center min-h-11 px-4 py-2 rounded-lg bg-surface-container text-on-surface border border-outline-variant font-mono text-code-md hover:bg-surface-container-high transition-colors duration-200"
              >
                Descargar CV (PDF)
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center min-h-11 px-3 rounded-lg text-primary hover:text-on-surface font-mono text-code-md transition-colors duration-200"
              >
                Explorar proyectos
                <ChevronDown size={18} className="ml-1" aria-hidden />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 w-full">
            <div className="rounded-xl bg-surface-container p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-code-sm uppercase tracking-wider text-outline">
                  Target Size WCAG 2.2
                </span>
                <Hand size={22} className="text-secondary" aria-hidden />
              </div>
              <div className="text-headline-lg text-on-surface tracking-tight">
                ≥ 44×44 px
              </div>
              <p className="text-body-sm text-on-surface-variant">
                Criterio 2.5.8 que aplico en cada auditoría e interfaz que
                construyo.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-code-sm uppercase tracking-wider text-outline">
                  Accesibilidad en CI/CD
                </span>
                <Settings2 size={22} className="text-primary" aria-hidden />
              </div>
              <p className="text-body-sm text-on-surface-variant">
                Integración de Axe-core en pipelines de Jenkins y GitLab para
                bloquear regresiones de accesibilidad antes de producción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
