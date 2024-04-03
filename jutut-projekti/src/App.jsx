import React from "react";


function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  function addThings() {
    const newThings = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThings]);
  }

  const thingsAdd = things.map((thing) => <p>{thing}</p>);

  return (
    <div>
      <button onClick={addThings}>Add Item</button>
      {thingsAdd}
    </div>
  );
}

export default App;
