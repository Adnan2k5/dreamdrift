import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import React, { useState } from "react";
import { IoCaretBack } from "react-icons/io5";
import market from "@/assets/market.png";
import brand from "@/assets/brand.png";
import event from "@/assets/event.png";
import fund from "@/assets/fund.png";
import research from "@/assets/research.png";
export const Marketing = () => {
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
            <img src={market} alt="Web" height={60} width={60} />
            <h1 className="text-white font-mono text-lg">Marketing</h1>
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
                <img src={brand} alt="Web" height={60} width={60} />
                <h1 className="text-white xl:text-2xl text-lg">Branding</h1>
              </div>
              {hover && (
                <p className="text-white  xl:text-xl text-sm text-wrap">
                  At Dream Drift, we specialize in creating powerful brand identities that resonate with your audience. Our tailored branding solutions combine creativity and strategy to build memorable, impactful visuals and messaging.
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
                <img src={event} alt="Web" height={60} width={60} />
                <h1 className="text-white xl:text-2xl text-lg">Event Mangement</h1>
              </div>
              {hover1 && (
                <p className="text-white xl:text-xl text-sm text-wrap">
                  At Dream Drift, we design and manage events that leave lasting impressions. Our tailored event management solutions ensure seamless planning, coordination, and execution. With a focus on creativity and precision, we bring your vision to life, delivering memorable and impactful events every time.
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
                <img src={fund} alt="Web" height={60} width={60} />
                <h1 className="text-white  xl:text-2xl text-lg">Fundraising</h1>
              </div>
              {hover3 && (
                <p className="text-white xl:text-xl text-sm text-wrap">
                 At Dream Drift, we craft and manage fundraising campaigns that inspire action and drive results. Our tailored solutions focus on strategy, engagement, and outreach to maximize donations and support. With innovative approaches and attention to detail, we help you achieve your fundraising goals efficiently and effectively.
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
                <img src={research} alt="Web" height={60} width={60} />
                <h1 className="text-white xl:text-2xl text-lg">Research & Strategy</h1>
              </div>
              {hover2 && (
                <p className="text-white xl:text-xl text-sm text-wrap">
                  At Dream Drift, we provide in-depth research and strategic planning to guide your business towards success. Our tailored solutions deliver actionable insights and data-driven strategies that help you stay ahead in a competitive market. With a focus on precision and innovation, we empower you to make informed, impactful decisions.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
