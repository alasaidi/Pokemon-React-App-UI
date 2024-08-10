// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import "./home-page.css";

import Pokemon from "../../Pokemon-card/Pokemon.jsx";
// import pokemon_data from "../../data/pokemon_data/pokemon-data.js";
import Header from "../../header/Header.jsx";
import { getPokemon, logout } from "../../../services/pokemonServices.js";
import PlayerPokemon from "../../Pokemon-card/PlayerPokemon.jsx";

const HomePage = () => {
  const [player, setPlayer] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // Fetch player data
    const handalPlayer = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        setIsLogin(true);
      }

      try {
        const players = await getPokemon();
        setPlayer(players);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    handalPlayer();
  }, []);

  useEffect(() => {
    console.log("Updated player state:", player);
  }, [player]);

  const handalLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("authToken");
      setIsLogin(false);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="body">
      <Header />
      <button onClick={handalLogout}>logout</button>
      <div className="pokemonContainer">
        <p>{JSON.stringify(player, null, 2)}</p>
        {isLogin ? <PlayerPokemon pokemon_data={player} stylename="custom-style-2" onLogout={handalLogout} /> : <Pokemon pokemon_data={player} stylename="custom-style-1" />}
      </div>
    </div>
  );
};

export default HomePage;
