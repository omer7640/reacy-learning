import React, { useState } from "react";

export default function UserGreeting() {
  const [login, setLogin] = useState(true);
  // IF ELSE
  // let message;
  // if (login) {
  //   message = "welcome umer";
  // } else {
  //   message = "welcome guest";
  // }

  return (
    <div>
      {/* <h3>{message}</h3> */}

      {/* TERNARY */}
      {login ? <h3>Welcome Umer</h3> : <h3>welcome guest</h3>}
    </div>
  );
}
