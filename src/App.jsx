import { useState } from "react";
import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import Functional from "./Components/Functional";
import Practice1 from "./Components/Practice1";
import Greet from "./Components/Greet";
import Greet2 from "./Components/Greet2";
import Increment from "./Components/Increment";
import FunctionClick from "./Components/FunctionClick";
import ParentComp from "./Components/ParentComp";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <div>
        {/* DAY1 */}
        {/* HELLO WORLD */}
        <h1>Hello world</h1>
        {/*1st Components */}
        <FirstComponent />
        {/* Functional component */}
        <Functional />
        {/* JSX */}
        <Practice1 />
        {/* Props */}
        {/* passing the properties from parent comp to child */}
        <Greet name={"umer"} age={"19"} />
        {/* STATE */}
        <Greet2 />
        {/* SETSTATE */}
        <Increment />
        {/* EVENT HANDLER */}
        <FunctionClick />
        {/* METHOD AS PROPS */}
        <ParentComp />

        {/* CONDITIONAL RENDERING */}
        <UserGreeting />
        {/* LIST RENDERING */}
        <NameList />

        {/* BASIC FORM HANDLING */}
        <Form />
      </div>
    </>
  );
}

export default App;
