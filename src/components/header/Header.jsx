import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src="../../../public/header.png" alt="Pokémon Logo" className="pokemon-logo" />
      <div className="ball">
        <img src="https://raw.githubusercontent.com/gaurav-gogia/pakdemon/master/includes/pokeball.gif" alt="Pokéball" className="pokeball" />
      </div>
    </div>
  );
};

export default Header;
