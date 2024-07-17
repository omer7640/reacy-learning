import React from "react";

export default function Greet(props) {
  return (
    <div>
      <h1>
        Hello my name is {props.name} and I am {props.age} years old
      </h1>
    </div>
  );
}
