import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import dream from '../assets/dream.png'

import { Link } from "react-scroll";

export const Navbar = ({page}) => {
  const [open, setOpen] = useState(false);
  const [state,setstate] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if(page === "home"){
      setstate(true)
    }
  }, [])

  return (
    <div>
      <div
        className={`flex backdrop:blur-lg  fixed top-0 left-0 z-50 p-2 items-center ${
          scrolled ? "backdrop-blur-md" : ""
        }  justify-center w-screen h-[10vh]`}
      >
        <div className="nav w-[90%] flex justify-between m-auto">
          <div className="nav-logo flex w-[10vw] items-center justify-center">
          <img src={dream} width={90} alt="dream"/>
          </div>
          <div className="flex components items-center justify-center text-white">
            <ul className="hidden  transition-all duration-300 md:flex lg:flex gap-5">
              <li className="hover:text-gray-300 cursor-pointer">
                {state ? <Link to="home" smooth={true} duration={500}>Home</Link> : <a href="/">Home</a>}
              </li>
              <li className="hover:text-gray-300 cursor-pointer">
              {state ? <Link to="about" smooth={true} duration={500}>About</Link> : <a href="/">About</a>}
              </li>
              <li className="hover:text-gray-300 cursor-pointer">
              {state ? <Link to="services" smooth={true} duration={500}>Services</Link> : <a href="/">Services</a>}
              </li>
            </ul>
            <p
              onClick={() => setOpen(!open)}
              className="cursor-pointer visible md:hidden lg:hidden text-white"
            >
              <GiHamburgerMenu />
            </p>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 z-40 right-0 h-full w-1/2 bg-black text-white flex flex-col items-center justify-center space-y-5 transform transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-5 text-lg">
          <li className="hover:text-gray-300 cursor-pointer">
            {state ? <Link to="home" smooth={true} duration={500}>Home</Link> : <a href="/">Home</a>}
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            {state ? <Link to="about" smooth={true} duration={500}>About</Link> : <a href="/">About</a>}
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            {state ? <Link to="services" smooth={true} duration={500}>Services</Link> : <a href="/">Services</a>} 
          </li>
        </ul>
      </div>
    </div>
  );
};
