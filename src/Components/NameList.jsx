import React from "react";
import PersonList from "./PersonList";

export default function NameList() {
  // const names = ["Bruce", "lee", "dina"];
  const persons = [
    { id: 1, name: "bruce", age: "20", skill: "HTML" },
    { id: 2, name: "lee", age: "27", skill: "vue" },
    { id: 3, name: "dina", age: "23", skill: "angular" },
  ];
  return (
    <div>
      <h2>list</h2>
      {persons.map((person) => (
        <PersonList person={person} key={person.id} />
      ))}
    </div>
  );
}
