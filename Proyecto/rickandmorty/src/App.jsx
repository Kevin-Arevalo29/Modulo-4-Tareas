import React from 'react'
import Title from './components/Title/Title'
import Imagens from './components/Image/Imagens'
import Details from './components/Details/Details'
import './App.css'

function App() {
  

  return (
   <div className='card'>
    <div className='imgs'><Imagens url="./Rick.jpg"/></div>
    <div className='circule'><Details Status='Vivo' /></div>
    <div className='title'><Title Title='Rick Sanchez'/></div>
    <div className='details'><Details Genre='Hombre'/></div>
   </div>
  )
}

export default App
