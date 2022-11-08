import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



const mainDiv = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
}

const button = {
  backgroundColor: "#101010",
  color: "white"
}

const list = {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column"
}



function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {setPokemon(response.data.results)})
  }, []);
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {
          pokemon.map((item, i) => {
            return (
              <li key={i}>{item.name}</li>
            );
          })
        }
      </ul>
    </>
    
  )
}

export default App;
