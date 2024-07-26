import "./pokemon-card.css";
const Pokemon = ({ pokemon_data = {}, stylename = "" }) => {
  return pokemon_data.map((pokemon) => (
    <div className={`container ${stylename}`} key={pokemon.id}>
      <div className="character-card">
        <div className="image-container">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="details-container">
          <div className="name-description">
            <h2>{pokemon.name}</h2>
            <p>{pokemon.type}</p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Pokemon;
