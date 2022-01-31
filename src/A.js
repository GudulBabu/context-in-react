import React, { useContext } from "react";
import Context from "./Context";
function A(props) {
  const colFromContext = useContext(Context);
  return (
    <div className="left">
      <h1 style={{ color: colFromContext.passedColor }}>This is component A</h1>
      <p>↓</p>
      {props.children}
    </div>
  );
}
export default A;
