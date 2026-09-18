import Row from "@components/placing/Row";

export default function Header() {
  return (
    <header className="h-16 flex justify-center items-center w-full bg-header border-b-2 border-b-header">
      <Row className="items-center justify-between px-8 w-full">
        <span className="text-2xl font-semibold text-header-logo">
          Héctor Rodríguez Tovar
        </span>
      </Row>
    </header>
  );
}
