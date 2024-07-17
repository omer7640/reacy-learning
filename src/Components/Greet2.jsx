import React from "react";
import { useState } from "react";

export default function Greet2() {
  let [message, setMessage] = useState("welcome visitor");
  function handleSub() {
    setMessage("Thank you for subscribing");
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleSub}>Subscribe</button>
    </div>
  );
}
