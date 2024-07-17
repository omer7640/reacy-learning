import React from "react";

export default function FunctionClick() {
  function handleClick() {
    console.log("clicked");
    alert("you clicked the button");
  }
  return (
    <div>
      <h3>Event handling</h3>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
