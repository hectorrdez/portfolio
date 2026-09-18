import Row from "@components/placing/Row";

export default function Footer() {
  return (
    <footer className="bg-footer text-footer flex flex-row justify-center items-center">
      <Row className="max-w-7xl justify-center p-4 items-center w-full">
        <span className="text-xs text-footer-muted">
          © {new Date().getFullYear()} Héctor Rodríguez Tovar
        </span>
      </Row>
    </footer>
  );
}
