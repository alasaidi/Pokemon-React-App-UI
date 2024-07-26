// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";

import Pokemon from "./assets/components/Pokemon/Pokemon.jsx";
import pokemon_data from "./assets/components/data/pokemon_data/pokemon-data.js";

const App = () => {
  return (
    <div>
      <h2 className="header">welcome to react page</h2>
      <div className="pokemonContainer">
        <Pokemon pokemon_data={pokemon_data} stylename="custom-style-1" />
        <Pokemon pokemon_data={pokemon_data} stylename="custom-style-2" />
      </div>
    </div>
  );
};

export default App;
