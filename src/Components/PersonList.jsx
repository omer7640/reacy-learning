import React from "react";

export default function PersonList({ person }) {
  const { name, age, skill } = person;
  return (
    <div>
      <h3>
        my name is {name} I am {age} and i know {skill}
      </h3>
    </div>
  );
}
