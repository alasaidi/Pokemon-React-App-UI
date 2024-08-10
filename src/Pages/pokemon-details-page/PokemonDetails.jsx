import "./pokemon-details.css";

export const PokemonDetails = () => {
  return (
    <div className="pokemon-details">
      <div className="details-header">
        <h1>Bulbasaur</h1>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
      </div>
      <div className="details-content">
        <p>
          <strong>Type: Grass</strong>
        </p>
        <p>
          <strong>Abilities: Grass</strong>
        </p>
        <p>
          <strong>Experience: Grass</strong>
        </p>
        <p>
          <strong>Level:10</strong>
        </p>
        <p>
          <strong>Nickname: Grass</strong>
        </p>
      </div>
    </div>
  );
};

export default PokemonDetails;
