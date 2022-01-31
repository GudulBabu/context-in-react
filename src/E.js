import { useContext } from "react";
import Context from "./Context";
function E() {
  const colFromContext = useContext(Context);
  return (
    <div>
      <h3 style={{ color: colFromContext.passedColor }}>This is component E</h3>
    </div>
  );
}
export default E;
