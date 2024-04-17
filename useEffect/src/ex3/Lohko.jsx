import React from "react";

function Lohko() {
  const [aika, setAika] = React.useState(0);
  React.useEffect(() => {
    console.log("Lohko on päivitetty!");
  });

  React.useEffect(() => {
    const iv = setInterval(() => {
      setAika((prevAika) => prevAika + 1);
    }, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div>
      <h2>Aikasi sivustolla on {aika} sekuntia.</h2>
    </div>
  );
}

export default Lohko;
