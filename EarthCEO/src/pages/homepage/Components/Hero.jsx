import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden ">
      <div className="hero py-[12px]">
        <Header />
      </div>

      <div className="flex items-center justify-center w-screen h-[90vh]">
        <div className="hero-content">
          <h2 className="tracking-tighter hero-heading md:leading-[10vw] leading-[11.5vw] text-center font-semibold text-[11vw] md:text-[9vw] font-Poppins block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
            Future With
            <p className="md:text-[12vw] text-[14vw] blinking-text mb-[30px]">
              USDL
            </p>
          </h2>

          <div className="hero-bottom bg-[#101b18] md:mx-[11vw] mx-[5vw]  md:px-[3vw] px-[5vw]  md:py-[2vw] py-[4vw] rounded-xl">
            <p className="text-gray-300 mb-[20px] text-center text-[16px] font-Poppins">
              USDL (United States Deeds to Land) is a digital currency designed
              to offer stability and growth by backing its value with real
              estate. As the world transitions into an era of artificial general
              intelligence, traditional financial systems may face unprecedented
              challenges.
            </p>
            <div className="text-center">
              <span className="relative inline-block overflow-hidden rounded-full p-[2px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67D785_0%,#87D978_50%,#C0DC61_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 py-2 text-[18px] font-medium text-gray-50 backdrop-blur-3xl">
                  Learn More About USDL
                </div>
              </span>
            </div>

            <a></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
