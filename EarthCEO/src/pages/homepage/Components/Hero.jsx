import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import USMAP from "../../../assets/USMAP.png";

const Hero = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden ">
      <div className="hero">
        <Header />
      </div>

      <div className="flex items-center justify-center w-screen h-[90vh]">
        <div className="hero-content">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="tracking-tighter hero-heading md:leading-[11vw] leading-[15vw] text-center font-semibold text-[15vw] md:text-[11vw] font-Poppins block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
          >
            $USDL
            <br />
            {/* <p className="md:text-[12vw] text-[17vw] blinking-text mb-[30px]">
              USDL
            </p> */}
          </motion.h2>

          {/* <div className="relative">
            <img
              className="w-[50vw] z-10 mx-auto border-2 border-white"
              src={USMAP}
              alt="USMAP"
            />
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="left-[36%] top-[30%] absolute z-20 tracking-tighter hero-heading md:leading-[11vw] leading-[15vw] text-center font-semibold text-[15vw] md:text-[9vw] font-Poppins block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
            >
              $USDL
            </motion.h2>
          </div> */}

          <motion.h4 className="text-white tracking-tighter md:leading-[2.5vw] leading-[5vw] text-center font-semibold text-[5vw] md:text-[2.5vw] font-Poppins block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
            1 USDL = 1 US Sq Foot
          </motion.h4>

          <div className="hero-bottom bg-[#101b18] md:mx-[11vw] mx-[5vw]  md:px-[3vw] px-[5vw]  md:py-[2vw] py-[4vw] rounded-xl md:mt-[50px] mt-[20px]">
            <p className="text-gray-300 mb-[20px] text-center text-[16px] font-Poppins">
              In a rapidly evolving world, USDL anchors your wealth in the most
              tangible, finite asset—land. With each USDL token, you own a piece
              of the United States, grounded in real value, immune to the
              volatility of artificial general intelligence (AGI) and beyond.
            </p>
            <div className="text-center">
              <Link to="/exploreland">
                <span className="relative inline-block overflow-hidden rounded-full p-[2px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67D785_0%,#87D978_50%,#C0DC61_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 py-2 text-[18px] font-medium text-gray-50 backdrop-blur-3xl">
                    Begin Your Journey
                  </div>
                </span>
              </Link>
            </div>

            <a></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
