import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  FileText,
  Mail,
  Phone,
} from "lucide-react";

type ContactChannel = {
  href: string;
  label: string;
  value: string;
  icon: typeof Mail;
};

const CHANNELS: ContactChannel[] = [
  {
    href: "mailto:hectorrdez@gmail.com",
    label: "Correo Electrónico",
    value: "hectorrdez@gmail.com",
    icon: Mail,
  },
  {
    href: "tel:+34601274516",
    label: "Teléfono Directo",
    value: "+34 601 27 45 16",
    icon: Phone,
  },
  {
    href: "https://www.linkedin.com/in/hectorrdez/",
    label: "Perfil Profesional",
    value: "linkedin.com/in/hectorrdez",
    icon: ExternalLink,
  },
];

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="contacto"
      className="min-h-screen px-4 sm:px-8 py-24 flex items-center"
    >
      <div
        ref={ref}
        className={StringUtils.JoinClassName(
          "reveal w-full max-w-4xl mx-auto flex flex-col gap-6",
          visible ? "reveal-visible" : undefined,
        )}
      >
        <div className="flex flex-col gap-2 text-center items-center">
          <span className="font-mono text-code-sm uppercase tracking-widest text-primary">
            05 // Contacto Directo
          </span>
          <h2 className="text-headline-lg text-on-surface tracking-tight">
            Hablemos de calidad y accesibilidad
          </h2>
          <p className="text-body-md text-on-surface-variant max-w-xl">
            Comunicación directa y sin intermediarios. Disponible para
            incorporación a equipos técnicos, consultoría especializada o
            proyectos de automatización.
          </p>
        </div>

        <div className="rounded-xl bg-surface-container p-4 sm:p-6 shadow-xl flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {CHANNELS.map((channel) => (
              <a
                key={channel.href}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  channel.href.startsWith("http") ? "noreferrer" : undefined
                }
                className="p-4 bg-surface-container-high rounded-xl flex flex-col gap-2 hover:bg-surface-container-highest transition-colors duration-200 group min-h-11"
              >
                <div className="flex items-center justify-between">
                  <channel.icon
                    size={22}
                    className="text-primary"
                    aria-hidden
                  />
                  <ArrowUpRight
                    size={18}
                    className="text-outline group-hover:text-primary transition-colors duration-200"
                    aria-hidden
                  />
                </div>
                <span className="font-mono text-label-md uppercase tracking-wider text-outline">
                  {channel.label}
                </span>
                <span className="font-mono text-code-sm text-on-surface break-all">
                  {channel.value}
                </span>
              </a>
            ))}
          </div>

          <div className="p-4 bg-surface-container-low rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                <FileText size={26} aria-hidden />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-headline-sm text-on-surface">
                  Curriculum Vitae Oficial (PDF)
                </span>
                <span className="text-body-sm text-outline">
                  Versión técnica actualizada
                </span>
              </div>
            </div>
            <a
              href="/cv/HectorRodriguezTovar_cv.pdf"
              download="HectorRodriguezTovar_cv.pdf"
              aria-label="Descargar CV en PDF"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-11 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container text-headline-sm hover:bg-primary-container/90 transition-colors duration-200"
            >
              <Download size={20} aria-hidden />
              Descargar CV en PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
