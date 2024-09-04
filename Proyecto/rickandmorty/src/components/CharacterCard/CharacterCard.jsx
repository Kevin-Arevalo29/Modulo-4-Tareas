import React from 'react'
import Title from '../Title/Title'
import Details from '../Details/Details'
import Images from '../Image/Images'


const CharacterCard = (props) => {
  return (
    <div className='card'>
        <div className='imgs'><Images url={props.image}/></div>
        <div className='circle'><Details Status={props.status}/></div>
        <div className='title'><Title Title={props.name}/></div>
        <div className='details'><Details Gender={props.gender}/></div>
    </div>
  )
}

export default CharacterCard