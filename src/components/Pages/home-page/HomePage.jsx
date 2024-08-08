// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import "./home-page.css";

import Pokemon from "../../Pokemon-card/Pokemon.jsx";
import pokemon_data from "../../data/pokemon_data/pokemon-data.js";
import Header from "../../header/Header.jsx";
import { getPokemon } from "../../../services/pokemonServices.js";
import PlayerPokemon from "../../Pokemon-card/PlayerPokemon.jsx";

const HomePage = () => {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    // Set token in localStorage for testing

    // Fetch player data
    const handalPlayer = async () => {
      try {
        const players = await getPokemon();
        setPlayer(players);
        console.log(players); // Log the fetched data
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    handalPlayer();
  }, []);
  useEffect(() => {
    console.log("Updated player state:", player);
  }, [player]);

  return (
    <div className="body">
      <Header />
      <div className="pokemonContainer">
        {/* <Pokemon pokemon_data={pokemon_data} stylename="custom-style-1" /> */}
        <PlayerPokemon pokemon_data={player} stylename="custom-style-2" />
        <div>
          <p>{JSON.stringify(player, null, 10)}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
