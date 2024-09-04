import React, { useEffect, useState } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard';

const RickAndMortyCard = ({id}) => {

  const[name, setName]= useState('');
  const[image, setImage]= useState('')
  const[gender, setGender]= useState('')
  const[status, setStatus]= useState('')
  

    useEffect(() => {
      
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) =>{
        console.log(data,'dataaa <----')
        setName(data.name)
        setImage(data.image)
        setGender(data.gender)
        setStatus(data.status)
      })
      .catch((error) => console.error("hay un error: ", error))
    }, [id])

  return (
    <div >

    <CharacterCard
    
    name={name}
    image={image}
    gender={gender}
    status={status}
/> 
   </div>
  )
}

export default RickAndMortyCard