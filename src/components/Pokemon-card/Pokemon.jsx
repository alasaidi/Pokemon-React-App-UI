import "./pokemon-card.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pokemon = ({ pokemon_data = [], stylename = "" }) => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(pokemon_data)) {
      pokemon_data.forEach((pokemon, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, pokemon.id]);
        }, index * 500); // 500ms delay between each item
      });
    } else {
      console.error("pokemon_data is not an array:", pokemon_data);
    }
  }, [pokemon_data]);

  console.log("test  ", pokemon_data);
  if (!Array.isArray(pokemon_data) || pokemon_data.length === 0) return null;

  return pokemon_data.map((pokemon) => (
    <div className={`container ${stylename} ${visibleItems.includes(pokemon.id) ? "visible" : ""}`} key={pokemon.id}>
      <div className="character-card">
        <div className="image-container">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="details-container">
          <div className="name-description">
            <h2>{pokemon.name}</h2>
            <p>{Array.isArray(pokemon.type) ? pokemon.type.join(", ") : pokemon.type}</p>
            <div className="abilities-description">
              <p>Abilities: {pokemon.abilities.join(", ")}</p>
            </div>
          </div>
          <button className="pokeball-button">
            <Link to="/pokemon">More Details</Link>
          </button>
        </div>
      </div>
    </div>
  ));
};

export default Pokemon;
