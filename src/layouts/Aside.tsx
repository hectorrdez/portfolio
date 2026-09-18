import Row from "@components/placing/Row";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState } from "react";

export default function Aside() {
  const [collapsed, setCollapse] = useState(false);

  return (
    <aside>
      <Row>
        {collapsed ? (
          <button onClick={() => setCollapse(!collapsed)} title="Expandir">
            <PanelLeftOpen />
          </button>
        ) : (
          <button onClick={() => setCollapse(!collapsed)}>
            <PanelLeftClose />
            <span>Contraer</span>
          </button>
        )}
      </Row>
    </aside>
  );
}
