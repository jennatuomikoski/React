import React from "react";

function Pokemon() {
  const [kuva, setKuva] = React.useState("");
  const [nimi, setNimi] = React.useState("");

  React.useState(() => {
    async function getPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/mankey ");
      const json = await response.json();
      console.log(json);
      const imgURL = json.sprites.other["official-artwork"].front_default;
      setKuva(imgURL);
      setNimi(json.name);
    }
    getPokemon();
  }, []);

  return (
    <div>
      <h1>{nimi}</h1>
      <img src={kuva} alt="mankey" />
    </div>
  );
}

export default Pokemon;
