import ThemeToggle from "@components/controls/ThemeToggle";
import Row from "@components/placing/Row";

export default function Header() {
  return (
    <header className="h-16 flex justify-center items-center w-full bg-surface border-b border-border">
      <Row className="items-center justify-between px-8 w-full">
        <span className="text-2xl font-semibold text-text">
          Héctor Rodríguez Tovar
        </span>
        <ThemeToggle />
      </Row>
    </header>
  );
}
