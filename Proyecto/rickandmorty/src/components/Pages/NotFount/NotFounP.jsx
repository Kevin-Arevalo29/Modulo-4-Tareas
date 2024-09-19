import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFounP = () => {
  return (
    <div className='error'>
        <h1>ESTA PAGINA NO FUNCIONA </h1>
        <h2 className='em'>👽</h2>
        <ul>
          <li>
            <NavLink to='/'>Home Page</NavLink>
          </li>
          <li>
            <NavLink to='personajes'>Personajes</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default NotFounP