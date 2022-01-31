import React, { useContext } from "react";
import Context from "./Context";
function C() {
  const contextValues = useContext(Context);
  function colorChanger() {
    return contextValues.setPassedColor("green");
  }
  return (
    <div>
      <h2>This is component C</h2>
      <button onClick={colorChanger}>Change Color inside C component</button>
    </div>
  );
}
export default C;
