import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import React, { useState } from "react";
import social from "@/assets/social.png";
import lead from "@/assets/lead.png";
import marketing from "@/assets/marketing.png";
import seo from "@/assets/seo.png"; 
import comm from "@/assets/comm.png";
import paid from "@/assets/paid.png";
import { IoCaretBack } from "react-icons/io5";

export const Social = () => {
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
            <img src={social} alt="Web" height={60} width={60} />
            <h1 className="text-white font-mono text-lg">Social Media Management</h1>
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
                <img src={lead} alt="Web" height={60} width={60} />
                <h1 className="text-white xl:text-2xl text-lg">Lead Generation</h1>
              </div>
              {hover && (
                <p className="text-white  xl:text-xl text-sm text-wrap">
                  At Dream Drift, we craft visually stunning, high-performance
                  websites tailored to your brand. With responsive design,
                  cutting-edge tech like React and Express, and a focus on user
                  experience, we ensure your website stands out and drives
                  results.
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
                <img src={marketing} alt="Web" height={60} width={60} />
                <h1 className="text-white xl:text-2xl text-lg">Social Media Marketing</h1>
              </div>
              {hover1 && (
                <p className="text-white xl:text-xl text-sm text-wrap">
                  Dream Drift simplifies content management with custom CMS solutions. We build user-friendly, scalable systems that make updating your website effortless. With cutting-edge technology and a focus on intuitive design, we create CMS platforms tailored to your business, allowing you to manage content with ease and efficiency.
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
                <img src={seo} alt="Web" height={60} width={60} />
                <h1 className="text-white  xl:text-2xl text-lg">Search Engine Optimization</h1>
              </div>
              {hover3 && (
                <p className="text-white xl:text-xl text-sm text-wrap">
                  At Dream Drift, we harness the power of data to drive informed business decisions. Our data science solutions transform raw data into actionable insights, helping you identify trends, optimize strategies, and predict future outcomes. With advanced analytics and cutting-edge technology, Dream Drift empowers your business with the tools to stay ahead in a data-driven world.
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
                <img src={comm} alt="Web" height={60} width={60} />
                <h1 className="text-white xl:text-2xl text-lg">Community Management</h1>
              </div>
              {hover2 && (
                <p className="text-white xl:text-xl text-sm text-wrap">
                  At Dream Drift, we design e-commerce platforms that combine stunning visuals with powerful functionality. Our tailored solutions ensure seamless user experiences, secure transactions, and easy management. Using the latest technologies, we build scalable, high-performing online stores that drive sales and customer engagement. 
                </p>
              )}
            </div>
          </div>
          <div
            onMouseEnter={() => { 
              sethover4(true);
            }}
            onMouseLeave={() => sethover4(false)}
            className="card1 m-auto card-shine-effect hover:md:h-[40vh] p-5 md:w-[50vw] hover:h-[50vh] hover:items-start transition-all duration-500 w-full border-2 flex justify-center items-center  rounded-[4rem] h-[10vh]">
            <div className="transition-all duration-500 flex-col flex gap-5 items-center md:items-center lg:items-center justify-center">
              <div className="logo  flex gap-5 justify-between items-center">
                <img src={paid} alt="Web" height={60} width={60} />
                <h1 className="text-white  xl:text-2xl  text-lg">Paid Colaboration</h1>
              </div>
              {hover4 && (
                <p className="text-white  xl:text-xl text-sm text-wrap">
                  Dream Drift creates custom CRM and ERM systems that simplify how you manage customer relationships and enterprise resources. Our solutions are designed for efficiency, offering intuitive interfaces and seamless integrations to help you organize data, automate tasks, and improve decision-making.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
