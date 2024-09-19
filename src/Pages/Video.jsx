import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import React, { useState } from "react";
import { IoCaretBack } from "react-icons/io5";
import video from "@/assets/video.png";
import videograph from "@/assets/videograh.png";
import videojour from "@/assets/videojour.png";
import film from "@/assets/flim.png";

export const Video = () => {
  const [hover, sethover] = useState(false);
  const [hover1, sethover1] = useState(false);
  const [hover2, sethover2] = useState(false);
  const [hover3, sethover3] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Navbar page="web" />

      <div className="page mt-32 p-5  flex-wrap rounded-[4rem] h-screen w-[90vw] m-auto">
        <div className="title rounded-[4rem]">
        <div className="back flex items-center">
            <a className="flex w-fit items-center" href="/">
                <IoCaretBack />Back
            </a>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="logo flex items-center gap-5 justify-around md:justify-start lg:justify-start md:gap-5 lg:gap-5 rounded-[4rem] p-6"
          >
            <img src={video} alt="Web" height={60} width={60} />
            <h1 className="text-white font-mono text-lg">Video Editing</h1>
          </motion.div>
        </div>
        <div className="mini-card mt-10 rounded-[4rem] flex flex-wrap flex-col md:flex-row lg:flex-row gap-5">
          <div
            onMouseEnter={() => {
              sethover(true);
            }}
            onMouseLeave={() => sethover(false)}
            className="card1 card-shine-effect  hover:h-[60vh] md:w-[40vw] p-5  hover:md:h-[40vh] hover:items-start  transition-all duration-500 w-full  flex justify-center  items-center rounded-[4rem] h-[10vh]"
          >
            <div className="transition-all p-2 rounded-[2rem] duration-500 flex flex-col gap-5 items-center md:items-center lg:items-center justify-center">
              <div className="logo  flex items-center gap-5">
                <img src={videograph} alt="Web" height={60} width={60} />
                <h1 className="text-white xl:text-2xl text-lg">Videography</h1>
              </div>
              {hover && (
                <p className="text-white  xl:text-xl text-sm text-wrap">
                  In videography at Dream Drift, the meaning of a parameter is determined by its connection with existing variables. Parameters such as camera angles, lighting settings, and editing effects are linked to specific elements within the video production process. 
                </p>
              )}
            </div>
          </div>
          <div
            onMouseEnter={() => {
              sethover1(true);
            }}
            onMouseLeave={() => sethover1(false)}
            className="card1 card-shine-effect p-5  hover:h-[54vh] hover:md:h-[48vh] hover:items-start transition-all md:w-[40vw] duration-500 w-full border-2 flex justify-center items-center  rounded-[4rem] h-[10vh]"
          >
            <div className="transition-all  duration-500 flex-col flex gap-5 items-center md:items-center lg:items-center justify-center">
              <div className="logo flex gap-4 items-center">
                <img src={videojour} alt="Web" height={60} width={60} />
                <h1 className="text-white xl:text-2xl text-lg">Videojournalism</h1>
              </div>
              {hover1 && (
                <p className="text-white xl:text-xl text-sm text-wrap">
                In videojournalism at Dream Drift, the meaning of a parameter is determined by its connection with existing variables. Parameters such as shot composition, editing techniques, and narrative pacing are linked to specific elements of the story and visual style. 
                </p>
              )}
            </div>
          </div>
          <div
            onMouseEnter={() => {
              sethover3(true);
            }}
            onMouseLeave={() => sethover3(false)}
            className="card1 card-shine-effect p-5 hover:md:h-[48vh] md:w-[40vw] hover:h-[58vh] hover:items-start transition-all duration-500 w-full border-2 flex justify-center items-center  rounded-[4rem] h-[10vh]"
          >
            <div className="transition-all duration-500 flex-col flex gap-5 items-center md:items-center lg:items-center justify-center">
              <div className="logo flex gap-5 items-center">
                <img src={film} alt="Web" height={60} width={60} />
                <h1 className="text-white  xl:text-2xl text-lg">Flim Making</h1>
              </div>
              {hover3 && (
                <p className="text-white xl:text-xl text-sm text-wrap">
                 In filmmaking at Dream Drift, the meaning of a parameter is determined by its connection with existing variables. Parameters such as camera settings, lighting conditions, and scene compositions are linked to specific aspects of the film's narrative and visual style. 
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
