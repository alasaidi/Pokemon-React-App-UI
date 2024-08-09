import "./pokemon-card.css";
import { useState, useEffect } from "react";
const PlayerPokemon = ({ pokemon_data = [], stylename = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  // to create the animation display
  useEffect(() => {
    // Add a small delay before showing the Pokemon
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  console.log("test  ", pokemon_data);
  if (!Array.isArray(pokemon_data) || pokemon_data.length === 0) return null;

  return pokemon_data.map((data) => (
    <div className={`container ${stylename} ${isVisible ? "visible" : ""}`} key={pokemon_data._id || data._id}>
      <div className="character-card">
        <div className="image-container">
          <img src={data.pokemon.picture} alt={data.pokemon.name} />
        </div>
        <div className="details-container">
          <div className="name-description">
            <h2>{data.pokemon.name}</h2>
            <p>{data.pokemon.type.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default PlayerPokemon;
