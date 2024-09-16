import React, { useEffect, useState } from 'react'
import CharacterCard from '../../CharacterCard/CharacterCard';

const CharacterP = () => {

    const[characterList, setCharacterList]= useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationInfo, setPaginationInfo] = useState({});
  

    useEffect(() => {
      
      fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) =>{
        console.log(data,'dataaa <----')
        setPaginationInfo(data.info)
        setCharacterList(data.results)
      })
      .catch((error) => console.error("hay un error: ", error))
    }, [currentPage])

  return (

<div className='position'>
    <div className='title2'> <h1> Personajes de Rick And Morty</h1> </div>
    {characterList.map((character)=>(
      <CharacterCard
    
      name={character.name}
      image={character.image}
      gender={character.gender}
      status={character.status}
      />
    ))}

<div ><br />
    <button className='button'
        onClick={() => setCurrentPage(currentPage - 1)} 
        disabled={!paginationInfo.prev}
    >
        Anterior
    </button>
    <span className='textb'>Página {currentPage} de {paginationInfo.pages}</span>
    <button className='button'
        onClick={() => setCurrentPage(currentPage + 1)} 
        disabled={!paginationInfo.next}
    >
        Siguiente
    </button>
</div>
   </div>
  )
}

export default CharacterP