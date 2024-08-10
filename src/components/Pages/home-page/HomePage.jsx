// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home-page.css";
import { Button } from "../../Buttons/Button.jsx";
import Pokemon from "../../Pokemon-card/Pokemon.jsx";
// import pokemon_data from "../../data/pokemon_data/pokemon-data.js";
import Header from "../../header/Header.jsx";
import { getPokemon, logout } from "../../../services/pokemonServices.js";
import PlayerPokemon from "../../Pokemon-card/PlayerPokemon.jsx";

const HomePage = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch player data
    const handalPlayer = async () => {
      const token = localStorage.getItem("token");
      setIsLogin(!!token);
      try {
        const data = await getPokemon();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching player data:", error);
        setPokemonData([]);
      }
    };

    handalPlayer();
  }, []);

  const handleAuth = async () => {
    if (!isLogin) {
      navigate("/login");
    }
    try {
      await logout();
      localStorage.removeItem("token");
      setIsLogin(false);
      const data = await getPokemon();
      setPokemonData(data);

      // Reset player data to an empty array
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="body">
      <Header />
      <div className="button-container">
        <Button style={!isLogin ? "login" : "logout"} action={handleAuth} />
      </div>
      <div className="pokemonContainer">
        {/* <p>{JSON.stringify(pokemonData, null, 2)}</p>
        {isLogin ? <p>true</p> : <p>false</p>} */}
        {isLogin ? <PlayerPokemon pokemon_data={pokemonData} stylename="custom-style-2" /> : <Pokemon pokemon_data={pokemonData} stylename="custom-style-1" />}
      </div>
    </div>
  );
};

export default HomePage;
