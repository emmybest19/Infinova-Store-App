import React from "react";
import { motion } from "framer-motion";
import fadein from './varient'

import records from "./records";
import Carousel from "./Carousel";
import 'animate.css';

function HeroSection() {
  return (
    <div className="px-0 md:px-16 dark:bg-real border-none mt-0">
      <div 
      // variants={fadein("up", 0.3)}
      // initial = "hidden" 
      // whileInView={"show"}
      // viewport={{once: false, amount: 0.7}}

      className="block md:flex justify-center items-center px-2 md:px-3 bg-light py-4 md:py-7  dark:bg-real border-none">
        <div        
        className=" dark:bg-real border-none animate__animated animate__bounce" >
          <motion.p 
          initial={{x: -1000}}
          animate={{x: 0}}
          transition={{
            duration: 2,
            delay: .5
          }}
          whileHover={{scale: 0.9, opacity: 0.7}}
        
          
          className="pr-5 font-Montserrat text-2xl md:text-6xl font-bold dark:text-white ">
            Discover <span className="text-brown-orange dark:text-yellow">Innovation, </span>
             Precision, and Performance in Every <span className="text-brown-orange dark:text-yellow">Device.</span>
          </motion.p>
        </div>
        <motion.div
        style={{ position: "relative", right: -1000 }}
        initial={{right: -1000}}
        animate={{right: 0}}
        transition={{
          duration: 2,
          delay:0.5
        }}

        
        className="dark:bg-real border-none mt-3 md:mt-4 w-full md:w-full">
          <Carousel data={records}/>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
