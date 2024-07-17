import React, { useState } from "react";

export default function Increment() {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}
