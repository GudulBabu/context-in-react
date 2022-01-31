import "./styles.css";
import A from "./A";
import B from "./B";
import C from "./C";
import D from "./D";
import E from "./E";
import Context from "./Context";
import { useState } from "react";

export default function App() {
  const col = "red";
  const [newColor, setNewColor] = useState(col);
  return (
    <div className="App">
      <h1>THIS IS APP COMPONENT</h1>
      <Context.Provider
        value={{ passedColor: newColor, setPassedColor: setNewColor }}
      >
        <A>
          <D>
            <E />
          </D>
        </A>

        <B>
          <C />
        </B>
      </Context.Provider>
    </div>
  );
}
