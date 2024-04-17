import React from "react";

function Intervalli() {
  const [count, setCount] = React.useState(0);

  function Add() {
    setCount(count + 1);
  }
  React.useEffect(() => {
    const iv = setInterval(() => {
      console.log("Intervallista terveisiä!");
    }, 1000);
    return () => {
      clearInterval(iv);
    };
  }, []);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={Add}>Kasvata</button>
      </div>
    </>
  );
}

export default Intervalli;
