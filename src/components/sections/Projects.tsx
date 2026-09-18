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
  description: string;
  image: ProjectImage;
  links: ProjectLink[];
};

const PROJECTS: ProjectDef[] = [
  {
    name: "Nazaret336",
    description:
      "Sitio web del Grupo Scout Nazaret 336 (San Vicente del Raspeig, Alicante): promueve sus valores educativos, organiza la logística de sus secciones por edad y centraliza reuniones, campamentos y proyectos de servicio comunitario.",
    image: {
      kind: "screenshot",
      src: "/projects/nazaret336.png",
      alt: "Captura de la web del Grupo Scout Nazaret 336",
    },
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
    description:
      "Plataforma institucional de transparencia y participación ciudadana: portal de auditoría pública en tiempo real, programa de gobierno por tareas medibles y un módulo de reclutamiento técnico con currículum ciego.",
    image: {
      kind: "screenshot",
      src: "/projects/nexo.png",
      alt: "Captura de la plataforma Nexo",
    },
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
    description:
      "Bot de música para Discord, self-hosted, con cola por servidor, modos de repetición, soporte de listas de YouTube y Spotify, control de acceso por rol de DJ y un dashboard web de estadísticas de uso.",
    image: { kind: "icon", icon: Bot },
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
    description:
      "Plataforma educativa de sostenibilidad medioambiental (Proyecto de Fin de Ciclo, DAW): el profesorado crea aulas y retos ecológicos, el alumnado los completa y compite en un ranking de clase combinando aprendizaje y gamificación.",
    image: {
      kind: "logo",
      src: "/projects/edugreen-logo.svg",
      alt: "Logo de EduGreen",
    },
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
      className="min-h-screen px-6 py-24 flex flex-col items-center gap-12"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-text">
        Proyectos
      </h2>
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: ProjectDef;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
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
      <Card className="flex flex-col gap-4 h-full">
        <ProjectImageBox image={project.image} />
        <h3 className="text-xl font-semibold text-text">{project.name}</h3>
        <p className="text-text-muted text-sm flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${link.label}: ${project.name}`}
              className="flex items-center gap-1.5 text-sm text-text-muted bg-surface border border-border rounded-full px-3 py-1.5 hover:text-accent hover:border-accent transition-colors duration-200"
            >
              <link.icon size={16} aria-hidden />
              {link.label}
            </a>
          ))}
        </div>
      </Card>
    </div>
  );
}

function ProjectImageBox({ image }: { image: ProjectImage }) {
  const containerClass =
    "rounded-md overflow-hidden bg-surface border border-border aspect-video flex items-center justify-center";

  if (image.kind === "icon") {
    const Icon = image.icon;
    return (
      <div className={containerClass}>
        <Icon size={40} className="text-text-muted" aria-hidden />
      </div>
    );
  }

  return (
    <div className={containerClass}>
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
