import React, { useState } from "react";
import "./services.css";
import webd from "../assets/webd.png";
import social from "../assets/social.png";
import video from "../assets/video.png";
import write from "../assets/write.png";
import graphic from "../assets/graphic.png";
import data from "../assets/data.png";
import ai from "../assets/ai.png";
import market from "../assets/market.png";
import music from "../assets/music.png";

export function Services() {
  return (
    <div className="services">
      <div className="text">
        <h1 className="text-white text-2xl md:text-4xl lg:text-4xl w-fit border-b-2 border-cyan-500">
          Our Services
        </h1>
      </div>
      <div className="content mt-8 flex md:max-h-9 w-full gap-5 justify-around items-center flex-wrap">
        <a className="w-full  md:w-[25vw]" href="/web">
          <div className="card-shine-effect hover:scale-105 xl:h-[26vh] duration-300 transition-all h-[33vh] flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
            <img src={webd} alt="Web" height={50} width={50} />
            <h3 className="title text-wrap text-center text-lg md:text-xl">
              Tech Production
            </h3>
          </div>
        </a>
        <a className="w-full md:w-[25vw]" href="/social">
          <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
            <img src={social} alt="social" height={50} width={50} />
            <h3 className="title text-center text-lg md:text-xl">
              Social Media
            </h3>
          </div>
        </a>
        <a className="w-full md:w-[25vw]" href="/ai">
          <div className="card-shine-effect  hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
            <img src={ai} alt="Ai" height={50} width={50} />
            <h3 className="title text-center text-lg md:text-xl">
              Ai Services
            </h3>
          </div>
        </a>
        <a className="w-full md:w-[25vw]" href="/market">
          <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
            <img src={market} alt="marketing" height={50} width={50} />
            <h3 className="title text-center text-lg md:text-xl">Marketing</h3>
          </div>
        </a>
        <a href="/music" className="w-full md:w-[25vw]">
          <div className="card-shine-effect xl:h-[26vh] hover:scale-110 duration-300 h-[33vh] transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
            <img src={music} alt="Music" height={50} width={50} />
            <h3 className="title text-center text-lg md:text-xl">
              Music & Audio
            </h3>
          </div>
        </a>
        <a href="/design" className="w-full md:w-[25vw]">
          <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
            <img src={graphic} alt="Graphic" height={50} width={50} />
            <h3 className="title text-center text-lg md:text-xl">Designing</h3>
          </div>
        </a>
        <a href="/video" className="w-full md:w-[25vw]">
          <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
            <img src={video} alt="Video" height={50} width={50} />
            <h3 className="title text-center text-lg md:text-xl">
              Video Editing
            </h3>
          </div>
        </a>
        <a href="/write" className="w-full md:w-[25vw]">
          <div className="card-shine-effect h-[33vh] xl:h-[26vh] hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
            <img src={write} alt="Write" height={50} width={50} />
            <h3 className="title text-center text-lg md:text-xl">
              Content Writing & Translation
            </h3>
          </div>
        </a>
        <a href="/data" className="w-full md:w-[25vw]">
          <div className="card-shine-effect hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-3  w-full mb-10 md:mb-0 md:w-[25vw]">
            <img src={data} alt="Data" height={50} width={50} />
            <h3 className="title text-center text-lg md:text-xl">
              Data Analysis
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
}
