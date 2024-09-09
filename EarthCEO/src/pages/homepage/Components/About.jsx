import React from "react";
import aboutImg from "../../../assets/land-3d-remover.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="about-section pb-[100px] w-[100%] bg-black md:px-[7vw] px-6 py-[7vw] md:pb-[4vw] pt-[7vw] flex md:flex-nowrap flex-wrap gap-[5vw] items-center">
        <img
          src={aboutImg}
          className="aboutImg md:w-[38vw] w-[80vw] rounded-[30px] mx-auto"
        />
        <div className="about-content">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="section-heading tracking-tighter font-Poppins md:text-[6vw] text-[9vw] text-white font-semibold"
          >
            What is USDL?
          </motion.h2>
          <p className="text-gray-300 mb-[20px] text-left text-[18px] font-Poppins uppercase">
            USDL (United States Deeds to Land) is a groundbreaking digital
            currency that is fully backed by real estate. In a world where
            technology is advancing rapidly, USDL offers a stable and secure
            investment option by anchoring its value to land.
          </p>
          <h4 className="text-[#C0DC61] mb-[20px] text-left md:text-[26px] text-[20px] font-Poppins uppercase">
            Why Land?
          </h4>
          <p className="text-gray-300 mb-[20px] text-left text-[16px] font-Poppins">
            Land is finite and cannot be replicated, making it an inherently
            valuable asset. Unlike traditional currencies, which can be subject
            to inflation and market volatility, USDL provides a stable store of
            value by tying each token to a tangible piece of land.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
