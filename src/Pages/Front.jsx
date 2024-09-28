import React from "react";

import webd from "../assets/website.png";
import social from "../assets/social-media.png";
import video from "../assets/blog.png";

import { motion } from "framer-motion";

export const Front = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="services flex flex-col justify-center items-center mt-64"
      >
        <div className="par bg-gray-400 p-4 rounded-lg">
          <p className="text-xl  font-bold  md:text-4xl font-sans rounded-2xl tracking-widest text-black text-center">
            Our Services
          </p>
        </div>

        <ul className="flex w-full flex-col md:flex-row items-center gap-10 md:justify-around justify-around h-fit  mt-12 p-4 text-white text-wrap text-sm">
          <li className="w-1/3 hover:scale-125 transition-all duration-300 hover:text-cyan-600 md:text-xl text-center flex gap-2 text-white flex-col justify-center items-center">
            <img
              className=""
              src={webd}
              height={50}
              width={50}
              alt="Web Developement"
            />
            <p className="text-xs md:text-lg text-gray-300 lg:text-lg font-comic">
              Tech & Development
            </p>
          </li>
          <li className="w-1/3 hover:scale-125 transition-all duration-300 hover:text-cyan-600 md:text-xl text-center flex flex-col gap-2 text-white justify-center items-center">
            <img
              className=""
              src={social}
              height={50}
              width={50}
              alt="Social Media"
            />
            <p className="text-xs md:text-sm text-gray-300 lg:text-lg font-comic">
              Social Media Management
            </p>
          </li>
          <li className="w-1/3 hover:scale-125 transition-all duration-300 hover:text-cyan-600 md:text-xl text-center flex flex-col gap-2 text-white justify-center items-center">
            <img
              className=""
              src={video}
              height={50}
              width={50}
              alt="Content Writing"
            />
            <p className="text-sm md:text-xl lg:text-lg text-gray-300 font-comic">
              Content Creation and Editing
            </p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};
