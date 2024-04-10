import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import Section from './warmup/Section.jsx'
//import Section from './ex1/Section.jsx'
//import Section from './ex2/Section.jsx'
import Profile from "./ex3/Profile.jsx";

function sayBoo() {
  console.log("Boo from main.jsx!");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Profile
      profileText={"Profile"}
      cardText={"Card"}
      buttonText={"Click me!"}
      handleClick={sayBoo}
    />
  </React.StrictMode>
);
