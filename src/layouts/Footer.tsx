import Column from "@components/placing/Column";
import Row from "@components/placing/Row";
import { ExternalLink, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-on-surface">
      <Row className="max-w-7xl mx-auto flex-col sm:flex-row justify-between gap-6 p-6 sm:p-8 items-start sm:items-center w-full">
        <Column className="gap-2">
          <Row className="items-center gap-2">
            <span className="px-2 py-1 bg-surface-container rounded font-mono text-code-sm text-primary">
              HRT // QA
            </span>
            <span className="text-headline-sm text-on-surface">
              Héctor Rodríguez Tovar
            </span>
          </Row>
          <p className="text-body-sm text-on-surface-variant max-w-md">
            QA Analyst especializado en automatización de pruebas y accesibilidad.
          </p>
          <Row className="items-center gap-1.5 font-mono text-code-sm text-on-surface-variant">
            <MapPin size={14} aria-hidden />
            Alicante, España
          </Row>
        </Column>
        <Row className="gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/hectorrdez/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Héctor Rodríguez Tovar"
            className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors duration-200"
          >
            <ExternalLink size={18} aria-hidden />
          </a>
          <a
            href="mailto:hectorrdez@gmail.com"
            aria-label="Enviar email a hectorrdez@gmail.com"
            className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors duration-200"
          >
            <Mail size={18} aria-hidden />
          </a>
        </Row>
      </Row>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-6">
        <p className="font-mono text-code-sm text-on-surface-variant">
          © {new Date().getFullYear()} Héctor Rodríguez Tovar
        </p>
      </div>
    </footer>
  );
}
