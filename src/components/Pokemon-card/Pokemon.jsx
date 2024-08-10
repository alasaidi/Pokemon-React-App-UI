import "./pokemon-card.css";
import { useState, useEffect, useRef } from "react";
import { Modal } from "../modal/Modal.jsx";

const Pokemon = ({ pokemon_data = [], stylename = "" }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const modalItem = useRef({});
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
  //toggle Modal
  const toggleModal = () => {
    setIsModal(!isModal);
  };

  if (!Array.isArray(pokemon_data) || pokemon_data.length === 0) return null;

  return (
    <>
      <div className="pokemonContainer">
        {isModal && <Modal action={toggleModal} data={modalItem.current} />}
        {pokemon_data.map((pokemon) => (
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
                    <p>Abilities: {Array.isArray(pokemon.abilities) ? pokemon.abilities.join(", ") : pokemon.abilities}</p>
                  </div>
                </div>
                <button
                  className="pokeball-button"
                  onClick={() => {
                    toggleModal();
                    modalItem.current = pokemon;
                  }}>
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pokemon;
