import React from "react";
import { Layout } from "../Layout/Layout";
import business from "../assets/bussiness.jpg";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import webd from "../assets/webd.png";
import social from "../assets/social.png";
import video from "../assets/video.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FadeText } from "@/components/ui/fade-text";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { Front } from "./front";
import scroll from "../assets/scroll.png";
export const Homeback = () => {
  return (
    <Layout>
      <div id="home" className="container w-full mt-[12rem]">
        <div className="title w-full flex justify-center items-center">
          <div className="z-10 flex m-auto w-full justify-center items-start">
            <AnimatedGradientText>
              <h1
                className={cn(
                  `inline md:text-6xl font-DmSans text-sm text-center m-auto font-extrabold animate-gradient bg-gradient-to-r from-[#212121] via-[#424045] to-[#ffffff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Dream Drift Services
              </h1>
            </AnimatedGradientText>
          </div>
        </div>
        <div className="pitch">
          <GradualSpacing
            className="font-display font-comic text-center  text-sm tracking-wide  text-gray-500 md:text-2xl"
            text="One Platform,"
          />
          <GradualSpacing
            className="font-display text-center font-comic text-sm h-fit  tracking-wide   text-gray-500 md:text-xl "
            text="Endless   Possibilities"
          />
        </div>
        <footer className="text-white hidden items-center justify-center text-center md:flex mt-60 ">
          <p><img src={scroll} width={30} height={30} alt="srcoll down"/></p>
        </footer>
      </div>
    </Layout>
  );
};
