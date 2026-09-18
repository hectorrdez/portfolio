import Card from "@components/cards/Card";
import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";
import { Bot, FolderGit2, Globe, type LucideIcon } from "lucide-react";

type ProjectImage =
  | { kind: "screenshot" | "logo"; src: string; alt: string }
  | { kind: "icon"; icon: LucideIcon };

type ProjectLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type ProjectDef = {
  name: string;
  category: string;
  description: string;
  image: ProjectImage;
  tags: string[];
  links: ProjectLink[];
};

const PROJECTS: ProjectDef[] = [
  {
    name: "Nazaret336",
    category: "Web Comunitaria",
    description:
      "Sitio web del Grupo Scout Nazaret 336 (San Vicente del Raspeig, Alicante): promueve sus valores educativos, organiza la logística de sus secciones por edad y centraliza reuniones, campamentos y proyectos de servicio comunitario.",
    image: {
      kind: "screenshot",
      src: "/projects/nazaret336.png",
      alt: "Captura de la web del Grupo Scout Nazaret 336",
    },
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    links: [
      {
        label: "Ver aplicación",
        href: "https://prueba-nazaret.hectorrdez.es",
        icon: Globe,
      },
    ],
  },
  {
    name: "Nexo",
    category: "Plataforma Ciudadana",
    description:
      "Plataforma institucional de transparencia y participación ciudadana: portal de auditoría pública en tiempo real, programa de gobierno por tareas medibles y un módulo de reclutamiento técnico con currículum ciego.",
    image: {
      kind: "screenshot",
      src: "/projects/nexo.png",
      alt: "Captura de la plataforma Nexo",
    },
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand"],
    links: [
      {
        label: "Ver aplicación",
        href: "https://nexo.hectorrdez.es",
        icon: Globe,
      },
    ],
  },
  {
    name: "Mambo Bot",
    category: "Audio & Automatización",
    description:
      "Bot de música para Discord, self-hosted, con cola por servidor, modos de repetición, soporte de listas de YouTube y Spotify, control de acceso por rol de DJ y un dashboard web de estadísticas de uso.",
    image: { kind: "icon", icon: Bot },
    tags: ["TypeScript", "discord.js", "Node.js"],
    links: [
      {
        label: "Ver dashboard",
        href: "https://mambo.hectorrdez.es/dashboard",
        icon: Globe,
      },
    ],
  },
  {
    name: "EduGreen",
    category: "TFC · Sostenibilidad",
    description:
      "Plataforma educativa de sostenibilidad medioambiental (Proyecto de Fin de Ciclo, DAW): el profesorado crea aulas y retos ecológicos, el alumnado los completa y compite en un ranking de clase combinando aprendizaje y gamificación.",
    image: {
      kind: "logo",
      src: "/projects/edugreen-logo.svg",
      alt: "Logo de EduGreen",
    },
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    links: [
      {
        label: "Repo frontend",
        href: "https://github.com/hectorrdez/edugreen-web",
        icon: FolderGit2,
      },
      {
        label: "Repo backend",
        href: "https://github.com/hectorrdez/edugreen-api",
        icon: FolderGit2,
      },
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="min-h-screen px-4 sm:px-8 py-24 flex items-center"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-mono text-code-sm uppercase tracking-widest text-primary">
            03 // Proyectos Seleccionados
          </span>
          <h2 className="text-headline-lg text-on-surface tracking-tight">
            Ingeniería de software con pruebas integradas
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: ProjectDef;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      aria-label={project.name}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={StringUtils.JoinClassName(
        "reveal",
        visible ? "reveal-visible" : undefined,
      )}
    >
      <Card className="flex flex-col gap-3 h-full overflow-hidden">
        <div className="-mx-6 -mt-6">
          <ProjectImageBox image={project.image} />
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-headline-md text-on-surface">
              {project.name}
            </h3>
            <span className="font-mono text-code-sm text-outline whitespace-nowrap">
              {project.category}
            </span>
          </div>
          <p className="text-body-md text-on-surface-variant flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-0.5 bg-surface-container-high text-primary font-mono text-code-sm rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label}: ${project.name}`}
                className="flex items-center gap-1.5 font-mono text-code-md text-on-surface-variant bg-surface-container-high rounded-lg px-3 py-1.5 hover:bg-surface-container-highest hover:text-on-surface transition-colors duration-200"
              >
                <link.icon size={16} aria-hidden />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Card>
    </article>
  );
}

function ProjectImageBox({ image }: { image: ProjectImage }) {
  if (image.kind === "icon") {
    const Icon = image.icon;
    return (
      <div className="h-48 w-full bg-surface-container-high flex items-center justify-center">
        <Icon size={40} className="text-on-surface-variant" aria-hidden />
      </div>
    );
  }

  return (
    <div className="h-48 w-full bg-surface-container-high flex items-center justify-center overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className={
          image.kind === "logo" ? "w-16 h-16" : "w-full h-full object-cover"
        }
      />
    </div>
  );
}
