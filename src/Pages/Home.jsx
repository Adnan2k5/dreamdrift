import React from "react";
import { Layout } from "../Layout/Layout";
import business from "../assets/bussiness.jpg";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import webd from "../assets/webd.png";
import social from "../assets/social.png";
import video from "../assets/video.png";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <Layout>
      <div
        id="home"
        className="w-full flex flex-col justify-center items-center mt-12 lg:mt-0  m-auto"
      >
        <div className="main shadow-2xl relative rounded-lg border-2  h-[55vh] w-full">
          <img
            className="absloute inset-0 w-full h-full object-cover object-top rounded-lg"
            src={business}
            alt="bus"
          />
          <div className="absolute z-10 mt-12  items-center justify-center h-[40vh] w-full inset-0  flex flex-col gap-2 text-white">
            <AnimatedGradientText>
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#bbe18a] via-[#040459] to-[#cacb7f] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-lg md:text-xl lg:text-2xl`
                )}
              >
                Dream Drift Services
              </span>
            </AnimatedGradientText>
          </div>
        </div>
        <div className="side h-[40vh] -mt-32 flex flex-col justify-center  items-center relative hover:scale-105 shadow-2xl transition-all duration-300  backdrop-blur-lg backdrop-saturate-150 bg-black/15 border-2 border-[rgba(255, 255, 255, 0.125)] z-30 -mt-24 rounded-lg  h-[30vh] w-[80vw]">
          <div className="title p-2 flex items-center justify-center">
            <h1 className="text-sm text-wrap font-mono -mt-20 text-center text-white  md:text-xl lg:text-2xl">
              Our most loved services
            </h1>
          </div>
          <div className="elements  flex items-center justify-center  h-[20vh] w-full">
            <div className="items mt-5 flex flex-col justify-around w-full">
              <ul className="flex items-center gap-2 md:justify-around justify-around h-fit  p-4 text-white text-wrap text-sm">
                <li className="w-1/3 hover:scale-125 transition-all duration-300 hover:text-cyan-600 md:text-xl text-center flex gap-2 text-white flex-col justify-center items-center">
                  <img
                    className=" mix-blend-color-burn"
                    src={webd}
                    height={50}
                    width={50}
                    alt="Web Developement"
                  />
                  <p className="text-xs md:text-lg lg:text-lg font-mono">
                    Web Designing & Development
                  </p>
                </li>
                <li className="w-1/3 hover:scale-125 transition-all duration-300 hover:text-cyan-600 md:text-xl text-center flex flex-col gap-2 text-white justify-center items-center">
                  <img
                    className=" mix-blend-color-burn"
                    src={social}
                    height={50}
                    width={50}
                    alt="Social Media"
                  />
                  <p className="text-xs md:text-sm lg:text-lg font-mono">
                    Social Media Management
                  </p>
                </li>
                <li className="w-1/3 hover:scale-125 transition-all duration-300 hover:text-cyan-600 md:text-xl text-center flex flex-col gap-2 text-white justify-center items-center">
                  <img
                    className=" mix-blend-color-burn"
                    src={video}
                    height={50}
                    width={50}
                    alt="Content Writing"
                  />
                  <p className="text-xs md:text-sm lg:text-lg font-mono">
                    Content Creation and Editing
                  </p>
                </li>
              </ul>
              <p className="text-center mt-12 h-fit w-fit m-auto">
                <AnimatedGradientText>
                  <Link to="services" smooth={true} duration={500}>
                    <span
                      className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#bbe18a] via-[#040459] to-[#cacb7f] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                      )}
                    >
                      scroll down to know more
                    </span>
                  </Link>
                </AnimatedGradientText>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
