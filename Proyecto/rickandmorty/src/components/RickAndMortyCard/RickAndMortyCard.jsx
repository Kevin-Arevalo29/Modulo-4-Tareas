import React, { useEffect, useState } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard';

const RickAndMortyCard = () => {

  const[characterList, setCharacterList]= useState([]);
 
  

    useEffect(() => {
      
      fetch(`https://rickandmortyapi.com/api/character/`)
      .then((res) => res.json())
      .then((data) =>{
        console.log(data,'dataaa <----')
        setCharacterList(data.results)
      })
      .catch((error) => console.error("hay un error: ", error))
    }, [])

  return (
    <div className='position'>
    {characterList.map((character)=>(
      <CharacterCard
    
      name={character.name}
      image={character.image}
      gender={character.gender}
      status={character.status}
      />
    ))}

   </div>
  )
}

export default RickAndMortyCard