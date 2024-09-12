
import React from "react";
import "./services.css";
import webd from "../assets/webd.png";
import social from '../assets/social.png'

export function Services() {
  return (
    <div className="services">
      <div className="text">
        <h1 className="text-white text-2xl md:text-4xl lg:text-4xl w-fit border-b-2 border-cyan-500">
          Our Services
        </h1>
      </div>
      <div className="content mt-8 flex w-full gap-5 justify-around items-center flex-wrap">
        <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
          <img src={webd} alt="Web" height={50} width={50} />
          <h3 className="title text-center text-lg md:text-xl">
            Technology & Programming
          </h3>
        </div>
        <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
        <img src={social} alt="Web" height={50} width={50}/>
          <h3 className="title text-center text-lg md:text-xl">Social Media</h3>
        </div>
        <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
        <img src={webd} alt="Web" height={50} width={50}/>
          <h3 className="title text-center text-lg md:text-xl">Ai Services</h3>
        </div>
        <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
        <img src={webd} alt="Web" height={50} width={50}/>
          <h3 className="title text-center text-lg md:text-xl">Marketing</h3>
        </div>
        <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
        <img src={webd} alt="Web" height={50} width={50}/>
          <h3 className="title text-center text-lg md:text-xl">Music & Audio</h3>
        </div>
        <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
        <img src={webd} alt="Web" height={50} width={50}/>
          <h3 className="title text-center text-lg md:text-xl">Designing</h3>
        </div>
        <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
        <img src={webd} alt="Web" height={50} width={50}/>
          <h3 className="title text-center text-lg md:text-xl">Video Editing</h3>
        </div>
        <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
        <img src={webd} alt="Web" height={50} width={50}/>
          <h3 className="title text-center text-lg md:text-xl">Content Writing & Translation</h3>
        </div>
        <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
        <img src={webd} alt="Web" height={50} width={50}/>
          <h3 className="title text-center text-lg md:text-xl">Data Analysis</h3>
        </div>
      </div>
    </div>
  );
}
