import React from "react";
import facebookIcon from "../../../assets/facebook.png";
import instagramIcon from "../../../assets/instagram.png";
import twitterIcon from "../../../assets/twitter.png";

const Footer = () => {
  return (
    <>
      <div className="footer bg-black relative z-10">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#A7DA6B_100%)]"></div>
        <div className="footer-container px-[7vw] pb-[3vw] md:pt-0 pt-[70px]">
          <div className="flex md:flex-nowrap flex-wrap justify-between ">
            <div className="footer-left md:basis-[55%] basis-[100%]">
              <div className="flex items-center md:flex-nowrap flex-wrap">
                <h2 className="pr-[20px] md:basis-[30%] basis-[100%] font-Poppins md:text-[1.5vw] text-[8vw] text-[#B6DB64] font-semibold mt-[8px] md:text-left text-center">
                  Grounded
                </h2>
                <p className="text-gray-300 md:text-left text-center text-[16px] font-Poppins md:pl-[40px] md:border-l-2 border-white">
                  Join us in shaping the future of finance with secure, land
                  backed tokens.
                </p>
              </div>
            </div>
            <div className="footer-right md:basis-[35%] basis-[100%] flex justify-between md:mt-[0] mt-[60px] ">
              <div className="footer-link bg-[#101B18] p-[15px] rounded-[10px] hover:bg-black ease-in-out duration-200 cursor-pointer">
                <img src={facebookIcon} className="w-[33px] " />
              </div>
              <div className="footer-link bg-[#101B18] p-[15px] rounded-[10px] hover:bg-black  ease-in-out duration-200 cursor-pointer">
                <img src={instagramIcon} className="w-[33px] " />
              </div>
              <div className="footer-link bg-[#101B18] p-[15px] rounded-[10px] hover:bg-black  ease-in-out duration-200 cursor-pointer">
                <img src={twitterIcon} className="w-[33px] " />
              </div>
            </div>
          </div>

          <div className="w-full h-[.3px] bg-[#2b2b2b] mt-[50px]"></div>
          <p className="text-gray-300 text-[16px] font-Poppins mt-[30px] font-semibold text-center">
            © 2024 USDL. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
