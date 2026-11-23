import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";
import { GitBranch, Layers, Puzzle, RefreshCw, ShieldCheck } from "lucide-react";

type HarnessCard = {
  title: string;
  description: string;
  icon: typeof Layers;
};

const CARDS: HarnessCard[] = [
  {
    title: "Feature inmutable",
    description:
      "Cada feature es un archivo con requisitos y criterio de hecho. Lo que se entregó no se reescribe: el cambio entra como una feature nueva.",
    icon: Layers,
  },
  {
    title: "Gate automático",
    description:
      "Typecheck, lint, build y Playwright deciden el cierre. El agente no se auto-aprueba.",
    icon: ShieldCheck,
  },
  {
    title: "Estado trazable",
    description:
      "El historial vive en un fichero, no en la memoria del chat. Cualquier sesión puede leer en qué estado está cada feature.",
    icon: GitBranch,
  },
  {
    title: "Relevo entre agentes",
    description:
      "Si una sesión se queda sin cuota, otro CLI o un modelo local retoma desde una nota de relevo.",
    icon: RefreshCw,
  },
];

const SKILLS = [
  "create-project",
  "create-repo",
  "init-app",
  "add-feature",
  "create-orchestrator",
  "api-spec-reader",
  "api-flow-connector",
  "bruno-request-builder",
  "bruno-test-engineer",
  "generate-api-test",
  "kanban",
  "image-bank",
  "usage-budget",
  "plane-board",
  "plane-refinement",
  "add-comment-plane-task",
];

export default function AiHarness() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="ia"
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
            05 // Harness de IA
          </span>
          <h2 className="text-headline-lg text-on-surface tracking-tight">
            Mi harness de desarrollo con IA
          </h2>
          <p className="text-body-lg text-on-surface-variant pt-2">
            Los agentes escriben código rápido. Mi harness decide cuándo una
            tarea está terminada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                aria-label={card.title}
                className="flex flex-col gap-3 bg-surface-container p-6 rounded-xl border border-outline-variant"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="text-headline-sm text-on-surface">
                  {card.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        <figure className="bg-surface-container p-6 rounded-xl border border-outline-variant flex flex-col items-center gap-4">
          <svg
            role="img"
            aria-labelledby="ia-flow-title"
            aria-describedby="ia-flow-desc"
            viewBox="0 0 360 340"
            className="w-full max-w-md h-auto text-on-surface"
          >
            <title id="ia-flow-title">Flujo del harness de desarrollo</title>
            <desc id="ia-flow-desc">
              Feature, luego Implementación, luego Gate con typecheck, lint,
              build y Playwright, y por último Cierre con commit. Desde
              Implementación y desde Gate sale una flecha discontinua de
              relevo hacia Otro agente, que retoma la tarea desde una nota de
              relevo.
            </desc>
            <defs>
              <marker
                id="ia-arrow"
                viewBox="0 0 8 8"
                refX="7"
                refY="4"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 z" fill="var(--color-outline)" />
              </marker>
              <marker
                id="ia-arrow-relay"
                viewBox="0 0 8 8"
                refX="7"
                refY="4"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 z" fill="var(--color-primary)" />
              </marker>
            </defs>

            {/* Flujo principal */}
            <g
              fill="var(--color-surface-container-high)"
              stroke="var(--color-outline-variant)"
              strokeWidth="1.5"
            >
              <rect x="20" y="16" width="200" height="56" rx="6" />
              <rect x="20" y="96" width="200" height="56" rx="6" />
              <rect
                x="20"
                y="176"
                width="200"
                height="72"
                rx="6"
                stroke="var(--color-secondary)"
                strokeWidth="2"
              />
              <rect x="20" y="272" width="200" height="56" rx="6" />
            </g>

            <g
              fill="var(--color-on-surface)"
              fontFamily="var(--font-mono)"
              textAnchor="middle"
            >
              <text x="120" y="40" fontSize="14">
                Feature
              </text>
              <text x="120" y="120" fontSize="14">
                Implementación
              </text>
              <text x="120" y="200" fontSize="14">
                Gate
              </text>
              <text x="120" y="296" fontSize="14">
                Cierre
              </text>
            </g>
            <g
              fill="var(--color-on-surface-variant)"
              fontFamily="var(--font-mono)"
              fontSize="11"
              textAnchor="middle"
            >
              <text x="120" y="58">
                archivo inmutable
              </text>
              <text x="120" y="138">
                agente de IA
              </text>
              <text x="120" y="218">
                typecheck · lint
              </text>
              <text x="120" y="234">
                build · Playwright
              </text>
              <text x="120" y="314">
                commit
              </text>
            </g>

            {/* Flechas del flujo */}
            <g
              stroke="var(--color-outline)"
              strokeWidth="1.5"
              fill="none"
              markerEnd="url(#ia-arrow)"
            >
              <line x1="120" y1="72" x2="120" y2="96" />
              <line x1="120" y1="152" x2="120" y2="176" />
              <line x1="120" y1="248" x2="120" y2="272" />
            </g>

            {/* Relevo */}
            <rect
              x="250"
              y="120"
              width="100"
              height="96"
              rx="6"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />
            <g
              fill="var(--color-on-surface)"
              fontFamily="var(--font-mono)"
              fontSize="12"
              textAnchor="middle"
            >
              <text x="300" y="164">
                Otro agente
              </text>
            </g>
            <text
              x="300"
              y="146"
              fill="var(--color-primary)"
              fontFamily="var(--font-mono)"
              fontSize="11"
              textAnchor="middle"
            >
              Relevo
            </text>
            <g
              stroke="var(--color-primary)"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              fill="none"
              markerEnd="url(#ia-arrow-relay)"
            >
              <line x1="220" y1="140" x2="250" y2="140" />
              <line x1="220" y1="200" x2="250" y2="200" />
            </g>
          </svg>
          <figcaption className="text-body-sm text-on-surface-variant text-center">
            La línea discontinua marca el relevo: otro agente retoma la tarea
            desde la nota cuando una sesión se detiene.
          </figcaption>
        </figure>

        <div className="flex flex-col gap-3 bg-surface-container-high p-6 rounded-xl">
          <h3 className="font-mono text-code-sm text-outline uppercase tracking-wider">
            Skills y herramientas
          </h3>
          <ul className="flex flex-wrap gap-1.5" aria-label="Skills del harness">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="px-2 py-1 bg-surface-container text-on-surface font-mono text-code-sm rounded"
              >
                {skill}
              </li>
            ))}
          </ul>
          <p className="text-body-sm text-on-surface-variant">
            16 skills portables. Compatible con Claude Code,
            Codex y Antigravity.
          </p>
          <p className="text-body-sm text-on-surface-variant flex items-start gap-2">
            <Puzzle size={16} className="text-secondary shrink-0 mt-0.5" aria-hidden />
            Mods propios para Claude Code: panel de agentes, medidor de uso
            5h/7d, barra de contexto, auto-clear, mejora de prompts.
          </p>
        </div>
      </div>
    </section>
  );
}
