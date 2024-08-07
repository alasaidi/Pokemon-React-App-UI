import "./pokemon-card.css";
import { useState, useEffect } from "react";
const Pokemon = ({ pokemon_data = {}, stylename = "" }) => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    pokemon_data.forEach((pokemon, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, pokemon.id]);
      }, index * 500); // 500ms delay between each item
    });
  }, [pokemon_data]);

  return pokemon_data.map((pokemon) => (
    <div className={`container ${stylename} ${visibleItems.includes(pokemon.id) ? "visible" : ""}`} key={pokemon.id}>
      <div className="character-card">
        <div className="image-container">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="details-container">
          <div className="name-description">
            <h2>{pokemon.name}</h2>
            <p>{pokemon.type}</p>
            <div className="abilities-description">
              <p>Abilities: {pokemon.abilities.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Pokemon;
