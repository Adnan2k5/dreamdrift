import React from "react";
import about from "../assets/about.png";
import { motion } from "framer-motion";
import IconCloud from "@/components/magicui/icon-cloud";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import qoute from "../assets/qoute.png";
import TextReveal from "@/components/magicui/text-reveal";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export const About = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="main flex flex-col md:flex-row lg:flex-row   p-5 items-center w-full h-[full]"
      >
        <div className="about  justify-start flex flex-col w-full md:mt-24 h-full rounded-lg text-[#A9A9A9]">
          <h1 className="text-2xl tracking-[0.4rem] md:text-4xl border-b-2 border-white/40 w-fit">
            About Us
          </h1>
          <div className="title flex gap-5 mt-8">
            <span className="flex justify-start">
              <img src={qoute} alt="qoute" className="w-12 h-12" />
            </span>
            <p className="text-lg w-full text-justify md:text-xl mt-4">
              At Dream Drift Services, we are passionate about helping
              businesses grow through creative solutions. Our team specializes
              in web design and development, video editing, social media
              management, and graphic design.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="tech-stack  text-2xl md:text-4xl mt-44"
      >
        <span className="flex justify-end">
          <h1 className="text-[#A9A9A9] tracking-[0.4rem] border-b-2 border-white/40 w-fit">
            Tech Stack
          </h1>
        </span>
        <div className="content flex transition-all justify-center items-center duration-300  flex-col gap-8 md:flex-row lg:flex-row w-[80vw]">
          <div className="text mt-8 rounded-lg flex justify-start ">
            <p className="text-lg text-justify text-white w-[80vw] md:w-[90%] text-wrap md:text-xl">
              At Dream Drift Services, we utilize a versatile tech stack to
              deliver top-notch solutions. From using React for dynamic web
              interfaces to Express and Node.js for seamless backend
              functionality, we ensure robust performance. For design, we rely
              on Figma and Adobe Creative Suite to craft visually appealing,
              user-focused designs. Our commitment to using cutting-edge
              technologies ensures that every project meets the highest
              standards of quality and efficiency.
            </p>
          </div>
            <IconCloud iconSlugs={slugs} />
        </div>
      </motion.div>
    </div>
  );
};
