import Row from "@components/placing/Row";
import { ExternalLink, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-alt text-text flex flex-row justify-center items-center">
      <Row className="max-w-7xl justify-between gap-4 p-4 items-center w-full flex-wrap">
        <span className="text-xs text-text-muted">
          © {new Date().getFullYear()} Héctor Rodríguez Tovar
        </span>
        <Row className="gap-4">
          <a
            href="https://www.linkedin.com/in/hectorrdez/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Héctor Rodríguez Tovar"
            className="text-text-muted hover:text-accent transition-colors duration-200"
          >
            <ExternalLink size={18} />
          </a>
          <a
            href="mailto:hectorrdez@gmail.com"
            aria-label="Enviar email a hectorrdez@gmail.com"
            className="text-text-muted hover:text-accent transition-colors duration-200"
          >
            <Mail size={18} />
          </a>
        </Row>
      </Row>
    </footer>
  );
}
