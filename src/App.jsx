// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import "./App.css";

import Pokemon from "./components/Pokemon-card/Pokemon.jsx";
import pokemon_data from "./components/data/pokemon_data/pokemon-data.js";
import Header from "./components/header/Header.jsx";
import { getPokemon } from "./services/pokemonServices.js";
import PlayerPokemon from "./components/Pokemon-card/PlayerPokemon.jsx";
import { Login } from "./components/Pages/login-page/Login.jsx";

const App = () => {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    // Set token in localStorage for testing
    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWMyNDIyNzgxYjkwMDgxNTRlZDAyOCIsImlhdCI6MTcyMjk2OTU0MSwiZXhwIjoxNzIyOTczMTQxfQ.dVbvqrHII5PHp4UtCyo2N_rZ2mGfTobZke0WNlsD3kE");

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
      {/* <Header /> */}
      <Login />
      {/* <div className="pokemonContainer"> */}
      {/* <Pokemon pokemon_data={pokemon_data} stylename="custom-style-1" /> */}
      {/* <PlayerPokemon pokemon_data={player} stylename="custom-style-2" />
        <div>
          <p>{JSON.stringify(player, null, 10)}</p>
        </div>
      </div> */}
    </div>
  );
};

export default App;
