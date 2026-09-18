import ThemeToggle from "@components/controls/ThemeToggle";
import Row from "@components/placing/Row";
import StringUtils from "@utils/StringUtils";
import { SECTIONS, SECTION_IDS } from "@utils/sections";
import { useActiveSection } from "@utils/useActiveSection";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-20 flex justify-center items-center w-full bg-surface/90 backdrop-blur-md border-b border-outline-variant">
      <Row className="items-center justify-between gap-3 px-4 sm:px-8 w-full">
        <a
          href="#home"
          aria-label="Héctor Rodríguez Tovar - Inicio"
          className="flex items-center gap-3 shrink-0"
        >
          <span className="px-2 py-1 bg-surface-container-high rounded-lg text-primary font-mono text-code-sm uppercase tracking-wider">
            HRT // QA
          </span>
          <span className="hidden md:inline-block text-headline-sm text-on-surface">
            Héctor R. Tovar
          </span>
        </a>
        <NavMenu />
        <Row className="items-center gap-3 flex-shrink-0">
          <ThemeToggle />
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center justify-center min-h-11 px-4 rounded-lg bg-primary-container text-on-primary-container text-headline-sm hover:bg-primary-container/90 transition-colors duration-200"
          >
            Contactar
          </a>
        </Row>
      </Row>
    </header>
  );
}

function NavMenu() {
  const active = useActiveSection(SECTION_IDS);
  const links = SECTIONS.filter((section) => section.id !== "home");

  return (
    <nav
      aria-label="Secciones"
      className="flex items-center gap-1 p-1 bg-surface-container-lowest rounded-xl min-w-0 overflow-x-auto"
    >
      {links.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-current={active === section.id ? "true" : undefined}
          className={StringUtils.JoinClassName(
            "px-3 py-2 rounded-lg font-mono text-code-md whitespace-nowrap transition-colors duration-200",
            active === section.id
              ? "bg-primary-container text-on-primary-container"
              : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high",
          )}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
