import React from "react";
import "./style.css";

function Header() {
  //JSX
  return (
    <div id="cabecalho" className="jumbotron">
      <h1 className="display-4">Informações sobre Pokemons</h1>
      <figure>
        <img
          src="/Imagens/pikachu.png"
          alt="Pikachu"
          width="200"
          height="200"
        />

        <img
          src="/Imagens/bulbasaur.png "
          alt="bulb"
          width="200"
          height="200"
        />

        <img src="/Imagens/charizard.png " alt="cha" width="200" height="200" />
      </figure>
    </div>
  );
}
export default Header;
