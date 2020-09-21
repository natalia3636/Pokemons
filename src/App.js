import React, { useState, useEffect } from "react";
import "./styles.css";

function buscaDados() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  return fetch(url)
    .then(async (response) => await response.json())
    .then(async (dados) => {
      return await dados;
    })
    .catch((err) =>
      console.error("Erro ao buscar dados", err)
    ); /*ACONTECE SE PASSAR UMA URL QUE NÃO EXISTE OU QUE É FECHADA PARA ACESSO*/
}

export default function App() {
  const [pokemons, setPokemons] = useState(
    []
  ); /*criando um vetor, o use state serve para poder alterar algo, sem precisar recarregar a  página*/
  useEffect(() => {
    /*use vai ser executada uma vez quando  a pagina for carregada */
    buscaDados().then((dados) =>
      setPokemons(dados.results)
    ); /*vai buscar os dados e setar os dados*/
  }, []);
  return (
    <div className="App">
      <h3>Lista de seus respectivos nomes e seus perfis.</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Nome </th>
            <th> Meu perfil </th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map(function (item, index) {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
