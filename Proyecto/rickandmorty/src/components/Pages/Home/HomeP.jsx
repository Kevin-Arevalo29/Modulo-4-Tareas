import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeP = () => {
  return (
    <div>
        <h1 className='title1'>Bienvenidos a la Pagina de Rick And Morty</h1>
        <h3>Enlaces rapidos</h3>

        <div className='positionNav'>
            <ul>
                <li>
                    <NavLink to='/' className={({isActive})=>(isActive ? 'active': '')}>HomePage</NavLink>
                </li> 
                <li>
                    <NavLink to='./Personajes' className={({isActive})=>(isActive ? 'active': '')}>Personajes</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default HomeP