import React from "react";
function D(props) {
  return (
    <div>
      <h2>This is component D</h2>
      <p>↓</p>
      {props.children}
    </div>
  );
}
export default D;
