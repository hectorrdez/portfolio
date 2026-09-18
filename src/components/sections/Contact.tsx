import Button from "@components/controls/Button";
import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";
import { ExternalLink, Mail, Phone } from "lucide-react";

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="contacto"
      className="min-h-screen px-6 py-24 flex items-center justify-center"
    >
      <div
        ref={ref}
        className={StringUtils.JoinClassName(
          "reveal max-w-xl w-full flex flex-col items-center gap-8 text-center",
          visible ? "reveal-visible" : undefined,
        )}
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text">
            Contacto
          </h2>
          <p className="text-text-muted">Alicante, España</p>
        </div>

        <div className="flex flex-col gap-4 w-full items-center">
          <a
            href="mailto:hectorrdez@gmail.com"
            className="flex items-center gap-2 text-text hover:text-accent transition-colors duration-200"
          >
            <Mail size={18} aria-hidden />
            hectorrdez@gmail.com
          </a>
          <a
            href="tel:+34601274516"
            className="flex items-center gap-2 text-text hover:text-accent transition-colors duration-200"
          >
            <Phone size={18} aria-hidden />
            +34 601 27 45 16
          </a>
          <a
            href="https://www.linkedin.com/in/hectorrdez/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-text hover:text-accent transition-colors duration-200"
          >
            <ExternalLink size={18} aria-hidden />
            linkedin.com/in/hectorrdez
          </a>
        </div>

        <a
          href="/cv/HectorRodriguezTovar_cv.pdf"
          download="HectorRodriguezTovar_cv.pdf"
          aria-label="Descargar CV en PDF"
          className="w-fit"
        >
          <Button>Descargar CV</Button>
        </a>
      </div>
    </section>
  );
}
