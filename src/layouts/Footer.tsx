import Row from "@components/placing/Row";

export default function Footer() {
  return (
    <footer className="bg-surface-alt text-text flex flex-row justify-center items-center">
      <Row className="max-w-7xl justify-center p-4 items-center w-full">
        <span className="text-xs text-text-muted">
          © {new Date().getFullYear()} Héctor Rodríguez Tovar
        </span>
      </Row>
    </footer>
  );
}
