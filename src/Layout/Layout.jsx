import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className="hero m-auto w-[90vw] mt-[5rem] h-[80vh]">
            {children}
        </div>
        <Footer/>
    </div>
  )
}
