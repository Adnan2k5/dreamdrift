import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Services } from '../Pages/Services'
import { About } from '../Pages/About'
import { Front } from '../Pages/Front'
import whatsapp from '../assets/whatsapp.png'

export const Layout = ({children}) => {
  return (
    <div>
        <Navbar page="home"/>
        <a href="https://wa.me/message/YYMEI67D75IDD1" className="whatsapp fixed right-5 bottom-5 z-50">
          <img src={whatsapp} alt='whatsapp' width={35} height={35}/>
        </a>
        <div className="hero md:mt-32 m-auto w-[90vw] flex justify-center items-center h-[80vh]">
            {children}
        </div>
        <div className="front mt-24">
          <Front/>
        </div>
        <div id='about' className="about mt-32 p-5  m-auto w-[90vw]">
          <About/>
        </div>
        <div id='services' className="services p-5 m-auto w-[90vw] mt-[12rem]">
          <Services/>
        </div>
        <div className="footer md:mt-[100vh] h-[10vh]">
          <Footer/>
        </div>
    </div>
  )
}
