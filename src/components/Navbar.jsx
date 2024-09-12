import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
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
 
  return (
    <div>
      <div className={`flex backdrop:blur-lg  fixed top-0 left-0 z-50 p-2 items-center ${scrolled ? 'bg-[#182923]/90 backdrop-blur-md' : 'bg-[#182923]/50'}  justify-center w-screen h-[10vh] bg-[#182923]`}>
        <div className="nav w-[90%] flex justify-between m-auto">
          <div className="nav-logo flex items-center p-2 justify-center">
            <h1 className="font-mono md:text-xl lg:text-2xl text-white text-lg">Dream Drift</h1>
          </div>
          <div className="flex components items-center justify-center text-white">
            <ul className="hidden  transition-all duration-300 md:flex lg:flex gap-5">
              <li className="hover:text-gray-300 duration-400">Home</li>
              <li className="hover:text-gray-300 duration-400">About</li>
              <li className="hover:text-gray-300 duration-400">Services</li>
            </ul>
            <p onClick={() => setOpen(!open)} className="cursor-pointer visible md:hidden lg:hidden text-white">
              <GiHamburgerMenu />
            </p>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 z-40 right-0 h-full w-1/2 bg-black text-white flex flex-col items-center justify-center space-y-5 transform transition-transform duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <ul className="flex flex-col items-center gap-5 text-lg">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
        </ul>
      </div>
    </div>
  );
};
