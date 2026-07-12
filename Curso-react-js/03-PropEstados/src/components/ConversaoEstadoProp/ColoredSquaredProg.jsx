import { useState } from "react";

import ColoredSquared from "./ColoredSquared";
import ColorizerButton from "./ColorizerButton";

export default function ColoredSquaredProg() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <ColoredSquared color={color} />
      <div className="flex gap-2 mt-4">
        <ColorizerButton title="Vermelho" clicked={() => setColor("red")} />
        <ColorizerButton title="Verde" clicked={() => setColor("green")} />
        <ColorizerButton title="Azul" clicked={() => setColor("blue")} />
      </div>
    </div>
  );
}
