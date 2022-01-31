import React from "react";
function B(props) {
  return (
    <div className="right">
      <h1>This is component B</h1>
      <p>↓</p>
      {props.children}
    </div>
  );
}
export default B;
