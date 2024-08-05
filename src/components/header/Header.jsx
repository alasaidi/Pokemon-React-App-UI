import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img src="/header.png" alt="Pokémon Logo" className="pokemon-logo" />
      <div className="ball">
        <img src="https://raw.githubusercontent.com/gaurav-gogia/pakdemon/master/includes/pokeball.gif" alt="Pokéball" className="pokeball" />
      </div>
    </div>
  );
};

export default Header;
