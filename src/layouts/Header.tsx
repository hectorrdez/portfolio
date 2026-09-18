import ThemeToggle from "@components/controls/ThemeToggle";
import Row from "@components/placing/Row";
import StringUtils from "@utils/StringUtils";
import { SECTIONS, SECTION_IDS } from "@utils/sections";
import { useActiveSection } from "@utils/useActiveSection";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-16 flex justify-center items-center w-full bg-surface/90 backdrop-blur-md border-b border-border">
      <Row className="items-center justify-between gap-4 px-4 sm:px-8 w-full">
        <a
          href="#home"
          className="text-lg sm:text-2xl font-semibold text-text shrink-0"
        >
          Héctor Rodríguez Tovar
        </a>
        <NavMenu />
        <ThemeToggle />
      </Row>
    </header>
  );
}

function NavMenu() {
  const active = useActiveSection(SECTION_IDS);
  const links = SECTIONS.filter((section) => section.id !== "home");

  return (
    <nav aria-label="Secciones" className="min-w-0 overflow-x-auto">
      <ul className="flex gap-6 whitespace-nowrap">
        {links.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              aria-current={active === section.id ? "true" : undefined}
              className={StringUtils.JoinClassName(
                "text-sm transition-colors duration-200 hover:text-accent",
                active === section.id
                  ? "text-accent font-medium"
                  : "text-text-muted",
              )}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
