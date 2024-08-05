// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import "./App.css";

import Pokemon from "./components/Pokemon-card/Pokemon.jsx";
import pokemon_data from "./components/data/pokemon_data/pokemon-data.js";
import Header from "./components/header/Header.jsx";
import { getPokemon } from "./services/pokemonServices.js";

const App = () => {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    handalPlayer();
  }, []);
  useEffect(() => {
    console.log("Updated player state:", player);
  }, [player]);
  const handalPlayer = async () => {
    const players = await getPokemon();
    setPlayer(players);
    console.log(player);
  };

  return (
    <div>
      <Header />
      <div className="pokemonContainer">
        <Pokemon pokemon_data={pokemon_data} stylename="custom-style-1" />
        <Pokemon pokemon_data={player} stylename="custom-style-2" />
      </div>
    </div>
  );
};

export default App;
