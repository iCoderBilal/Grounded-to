import React from "react";
import aboutImg from "../../../assets/land-3d-remover.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="about-section pb-[100px] w-[100%] bg-black md:px-[7vw] px-6 py-[7vw] md:pb-[0vw] pt-[3vw] flex md:flex-nowrap flex-wrap gap-[5vw] items-center">
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
            className="section-heading tracking-tight font-Poppins md:text-[3.2vw] text-[6vw] md:leading-[3.8vw] leading-[6.5vw] text-white font-semibold mb-[30px]"
          >
            Why USDL Is The Next Big Thing In Digital Currency ?
          </motion.h2>
          <p className="text-gray-300 mb-[20px] text-left text-[18px] font-Poppins">
            Making Land Fungible In a world where attention and land are the
            only truly scarce resources,{" "}
            <b>
              USDL transforms land into a fungible, tradeable asset, offering
              stability and security in a post-AGI era.
            </b>
            <div className="mb-[15px]" />
            Make Currency Hard Again As AGI accelerates and traditional
            currencies become increasingly unstable, USDL provides a hard,
            grounded currency backed by the most reliable asset—land.{" "}
            <b>
              This is not just an investment; it's your foothold in the future.
            </b>
            <div className="mb-[15px]" />
            <b>
              While technology evolves exponentially, USDL remains steadfast.
              It’s not just about surviving the future—it’s about thriving in
              it.
            </b>{" "}
            USDL is designed to withstand the challenges of an AI-driven world,
            providing a safe haven for your wealth.
          </p>
          {/* <h4 className="text-[#C0DC61] mb-[20px] text-left md:text-[26px] text-[20px] font-Poppins uppercase">
            Why Land?
          </h4>
          <p className="text-gray-300 mb-[20px] text-left text-[18px] font-Poppins">
            Land is finite and cannot be replicated, making it an inherently
            valuable asset. Unlike traditional currencies, which can be subject
            to inflation and market volatility,{" "}
            <b>
              USDL provides a stable store of value by tying each token to a
              tangible piece of land.
            </b>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
