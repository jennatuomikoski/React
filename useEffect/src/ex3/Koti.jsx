import React from "react";
import Lohko from "./Lohko";

function Koti() {
  const [count, setCount] = React.useState(0);

  function Add() {
    setCount(count + 1);
  }
  React.useEffect(() => {
    console.log("Kotisivu on päivitetty!");
  }, []);

  return (
    <>
      <div>
        <h1>Vierailuita: {count}</h1>
        <button onClick={Add}>+</button>
        <Lohko />
      </div>
    </>
  );
}

export default Koti;
