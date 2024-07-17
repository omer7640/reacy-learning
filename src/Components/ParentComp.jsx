import React, { useState } from "react";
import ChildComp from "./ChildComp";

export default function ParentComp() {
  const [parent, setParent] = useState("Parent");
  function GreetHandler() {
    alert(`hello ${parent}`);
  }

  return (
    <div>
      <ChildComp GreetParent={GreetHandler} />
    </div>
  );
}
