import React from "react";

export default function ChildComp(props) {
  return (
    <div>
      <h1>Method as Props</h1>
      <button onClick={props.GreetParent}>Greet button</button>
    </div>
  );
}
