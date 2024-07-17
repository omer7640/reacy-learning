import React from "react";

export default function Practice1() {
  // PRACTICING JSX
  // JSX MAKES CODE EASIER

  const name = "umer";
  return (
    <div>
      {/* With JSX */}
      <h1>hello {name}</h1>
      <h3>React is {5 + 5} is better with JSX</h3>
    </div>
  );
  /* Without JSX */
  return React.createElement("div", null, "hello world");
}
