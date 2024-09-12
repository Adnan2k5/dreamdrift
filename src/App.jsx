import React, { useState } from 'react'
import './App.css'
import { Home } from './Pages/Home'
import AnimatedCursor from "react-animated-cursor"
import { Services } from './Pages/Services'
import ParticlesComponent from './components/ParticlesComponent'




function App() {

  return (
    <>
    <ParticlesComponent/>
      <AnimatedCursor
        color='0,255,255'
      />
      <Home/> 
      
    </>
  )
}

export default App
