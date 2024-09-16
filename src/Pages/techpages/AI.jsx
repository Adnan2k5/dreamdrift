import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import React, { useState } from "react";
import { IoCaretBack } from "react-icons/io5";
import ai from "@/assets/ai.png";
import aichat from "@/assets/chat.png";
import aispeech from "@/assets/speech.png";
import aivideo from "@/assets/aivideo.png";
import aiart from "@/assets/aiart.png";

export const AI = () => {
  const [hover, sethover] = useState(false);
  const [hover1, sethover1] = useState(false);
  const [hover2, sethover2] = useState(false);
  const [hover3, sethover3] = useState(false);
  const [hover4, sethover4] = useState(false);
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
            <img src={ai} alt="Web" height={60} width={60} />
            <h1 className="text-white font-mono text-lg">AI Services</h1>
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
                <img src={aichat} alt="Web" height={60} width={60} />
                <h1 className="text-white xl:text-2xl text-lg">AI Chatbot</h1>
              </div>
              {hover && (
                <p className="text-white  xl:text-xl text-sm text-wrap">
                  At Dream Drift, we craft intelligent AI chatbot systems that deliver instant, personalized responses to customers. Our solutions ensure seamless communication, automate repetitive tasks, and enhance user satisfaction.
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
                <img src={aispeech} alt="Web" height={60} width={60} />
                <h1 className="text-white xl:text-2xl text-lg">AI Speech & Audio</h1>
              </div>
              {hover1 && (
                <p className="text-white xl:text-xl text-sm text-wrap">
                  At Dream Drift, we develop advanced AI speech and audio systems that deliver crystal-clear communication and intuitive voice recognition. Our solutions are tailored for seamless interaction, supporting various industries with real-time voice processing and automated audio responses. Utilizing cutting-edge AI, we create scalable, high-performance systems that enhance user engagement and improve accessibility.
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
                <img src={aivideo} alt="Web" height={60} width={60} />
                <h1 className="text-white  xl:text-2xl text-lg">AI Video Editing</h1>
              </div>
              {hover3 && (
                <p className="text-white xl:text-xl text-sm text-wrap">
                 At Dream Drift, we leverage AI to streamline video editing, making it faster and more intuitive. Our AI-powered solutions automate tedious tasks like scene detection, color correction, and transitions, ensuring professional-quality results with minimal effort. Using cutting-edge technology.
                </p>
              )}
            </div>
          </div>
          <div
            onMouseEnter={() => { 
              sethover2(true);
            }}
            onMouseLeave={() => sethover2(false)}
            className="card1 card-shine-effect p-5 hover:md:h-[46vh] md:w-[40vw] hover:h-[54vh] hover:items-start transition-all duration-500 w-full border-2 flex justify-center items-center  rounded-[4rem] h-[10vh]">
            <div className="transition-all duration-500 flex-col flex gap-5 items-center md:items-center lg:items-center justify-center">
              <div className="logo flex gap-5 items-center">
                <img src={aiart} alt="Web" height={60} width={60} />
                <h1 className="text-white xl:text-2xl text-lg">AI Art & Design</h1>
              </div>
              {hover2 && (
                <p className="text-white xl:text-xl text-sm text-wrap">
                  At Dream Drift, we harness the power of AI to revolutionize art and design, blending creativity with cutting-edge algorithms. Our AI-driven solutions automate design processes, enhance creativity, and produce stunning visuals tailored to your needs. By leveraging advanced technology.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
