import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Services } from '@/Pages/Services'
import { About } from '@/Pages/About'

export const Layout = ({children}) => {
  return (
    <div>
        <Navbar page="home"/>
        <div className="hero md:mt-32 m-auto w-[90vw] p-5 mt-[2rem] h-[80vh]">
            {children}
        </div>
        <div id='about' className="about mt-32 p-5  m-auto w-[90vw]">
          <About/>
        </div>
        <div id='services' className="services p-5 m-auto w-[90vw] mt-[12rem]">
          <Services/>
        </div>
        <div className="footer mt-[90vh] h-[10vh]">
          <Footer/>
        </div>
    </div>
  )
}
