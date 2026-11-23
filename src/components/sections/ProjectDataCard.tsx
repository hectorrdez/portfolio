import Card from "@components/cards/Card";
import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import type { ProjectData } from "../../data/projects.data";
import { CATEGORY_LABELS } from "./projectCategories";

type ProjectDataCardProps = {
  project: ProjectData;
  index: number;
};

export default function ProjectDataCard({ project, index }: ProjectDataCardProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [caseOpen, setCaseOpen] = useState(false);
  const caseStudy = project.caseStudy;
  const panelId = `caso-estudio-${project.slug}`;

  return (
    <article
      ref={ref}
      aria-label={project.titulo}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={StringUtils.JoinClassName(
        "reveal",
        visible ? "reveal-visible" : undefined,
      )}
    >
      <Card className="flex flex-col gap-3 h-full">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-headline-md text-on-surface">{project.titulo}</h3>
          <span className="font-mono text-code-sm text-outline whitespace-nowrap">
            {CATEGORY_LABELS[project.categoria]}
          </span>
        </div>
        <p className="text-body-md text-on-surface-variant flex-1">
          {project.resumen}
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <li
              key={item}
              className="px-1.5 py-0.5 bg-surface-container-high text-primary font-mono text-code-sm rounded"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-code-md text-on-surface-variant bg-surface-container-high rounded-lg px-3 py-1.5 min-h-11 hover:bg-surface-container-highest hover:text-on-surface transition-colors duration-200"
            >
              <ExternalLink size={16} aria-hidden />
              {`Ver repositorio: ${project.titulo}`}
            </a>
          ) : (
            <span className="font-mono text-code-md text-on-surface-variant px-1 py-1.5">
              Repositorio privado
            </span>
          )}
          {caseStudy && (
            <button
              type="button"
              aria-expanded={caseOpen}
              aria-controls={panelId}
              onClick={() => setCaseOpen((open) => !open)}
              className="font-mono text-code-md text-on-surface bg-surface-container-high border border-outline-variant rounded-lg px-3 py-1.5 min-h-11 hover:bg-surface-container-highest transition-colors duration-200"
            >
              Ver caso de estudio
            </button>
          )}
        </div>
        {caseStudy && (
          <div id={panelId} hidden={!caseOpen} className="border-t border-outline-variant pt-3">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h4 className="font-mono text-code-sm uppercase tracking-widest text-primary">
                  Problema
                </h4>
                <p className="text-body-md text-on-surface-variant">
                  {caseStudy.problema}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-mono text-code-sm uppercase tracking-widest text-primary">
                  Solución
                </h4>
                <p className="text-body-md text-on-surface-variant">
                  {caseStudy.solucion}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-mono text-code-sm uppercase tracking-widest text-primary">
                  Resultado
                </h4>
                <p className="text-body-md text-on-surface-variant">
                  {caseStudy.resultado}
                </p>
              </div>
            </div>
          </div>
        )}
      </Card>
    </article>
  );
}
