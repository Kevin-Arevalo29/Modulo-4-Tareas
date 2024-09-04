import React from "react";
import RickAndMortyCard from "./components/RickAndMortyCard/RickAndMortyCard";
import "./App.css";

function App() {
  return (
    <>
    <h1 className="title1">Personajes de Rick An Morty</h1>
    <div className="position">
       
      <RickAndMortyCard id={1} />
      <RickAndMortyCard id={2} />
      <RickAndMortyCard id={3} />
      <RickAndMortyCard id={4} />
    </div>
    </>
  );
}

export default App;
