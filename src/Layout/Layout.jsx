import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className="hero md:mt-32 m-auto w-[90vw] p-5 mt-[2rem] h-[80vh]">
            {children}
        </div>
        <Footer/>
    </div>
  )
}
