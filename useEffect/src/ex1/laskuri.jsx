import React from "react";

function Laskuri() {
  const [count, setCount] = React.useState(0);

  function Add() {
    setCount(count + 1);
  }
  React.useEffect(() => {
    console.log("Komponentti alusettu!");
  }, []);
  React.useEffect(() => {
    console.log("Laskurin tila muutettu!");
  }, [count]);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={Add}>Kasvata</button>
      </div>
    </>
  );
}

export default Laskuri;
