import React, { useState } from 'react'
import './App.css'
import { Home } from './Pages/Home'
import AnimatedCursor from "react-animated-cursor"



function App() {

  return (
    <>
      <AnimatedCursor
        color='0,255,255'
      />
      <Home/>
    </>
  )
}

export default App
