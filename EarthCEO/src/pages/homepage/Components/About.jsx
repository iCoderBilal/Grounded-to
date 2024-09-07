import React from "react";
import aboutImg from "../../../assets/land-3d-remover.png";

const About = () => {
  return (
    <div>
      <div className="about-section w-[100%] bg-black px-[7vw] py-[7vw] pb-[4vw] pt-[7vw] flex gap-[5vw] items-center">
        <img src={aboutImg} className="aboutImg w-[38vw] rounded-[30px]" />
        <div className="about-content">
          <h2 className="section-heading tracking-tighter font-Poppins text-[6vw] text-white font-semibold">
            What is USDL?
          </h2>
          <p className="text-gray-300 mb-[20px] text-left text-[18px] font-Poppins uppercase">
            USDL (United States Deeds to Land) is a groundbreaking digital
            currency that is fully backed by real estate. In a world where
            technology is advancing rapidly, USDL offers a stable and secure
            investment option by anchoring its value to land.
          </p>
          <h4 className="text-[#C0DC61] mb-[20px] text-left text-[2vw] font-Poppins uppercase">
            Why Land?
          </h4>
          <p className="text-gray-300 mb-[20px] text-left text-[18px] font-Poppins">
            Land is finite and cannot be replicated, making it an inherently
            valuable asset. Unlike traditional currencies, which can be subject
            to inflation and market volatility, USDL provides a stable store of
            value by tying each token to a tangible piece of land
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
