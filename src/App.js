import React from "react";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div className="App" style={{ padding: "50px" }}>
      <h1>React Tooltip Example</h1>

      <Tooltip content="This is a tooltip at the top" position="top">
        <button>Hover me (Top)</button>
      </Tooltip>

      <Tooltip content="This is a tooltip at the bottom" position="bottom">
        <button style={{ marginLeft: "20px" }}>Hover me (Bottom)</button>
      </Tooltip>

      <Tooltip content="This is a tooltip on the left" position="left">
        <button style={{ marginLeft: "20px" }}>Hover me (Left)</button>
      </Tooltip>

      <Tooltip content="This is a tooltip on the right" position="right">
        <button style={{ marginLeft: "20px" }}>Hover me (Right)</button>
      </Tooltip>
    </div>
  );
}

export default App;
