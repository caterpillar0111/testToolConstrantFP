import { useState } from "react";
import "./styles.css";
import { getTargetToolCombination, getTargetItersection } from "./common";
import { ToolId, ToolType, testCombinationList } from "./MockData";
import { pipe } from "fp-ts/lib/function";

export default function App() {
  const [toolId, setToolId] = useState<ToolId>("Tool1");
  const [toolType, setToolType] = useState<ToolType>("MachineA");
  const getCombinationIntersection = pipe(
    getTargetToolCombination(testCombinationList)(toolId)(toolType),
    (x) => getTargetItersection(x)
  );
  console.log(getCombinationIntersection);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>{getCombinationIntersection.toString()}</h3>
      {/* <>${getCombinationIntersection.map{(item)=><h3>${item}</h3>}}</> */}
    </div>
  );
}
