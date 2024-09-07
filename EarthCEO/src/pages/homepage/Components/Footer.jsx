import React from "react";
import facebookIcon from "../../../assets/facebook.png";
import instagramIcon from "../../../assets/instagram.png";
import twitterIcon from "../../../assets/twitter.png";

const Footer = () => {
  return (
    <>
      <div className="footer bg-black">
        <div className="footer-container px-[7vw] pb-[3vw]">
          <div className="flex justify-between">
            <div className="footer-left basis-[55%]">
              <div className="flex">
                <h2 className="basis-[30%] font-Poppins text-[1.5vw] text-[#B6DB64] font-semibold mt-[8px]">
                  Grounded To
                </h2>
                <p className="text-gray-300 text-left text-[16px] font-Poppins pl-[40px] border-l-2 border-white">
                  Join us in shaping the future of finance with secure, land
                  backed tokens.
                </p>
              </div>
            </div>
            <div className="footer-right basis-[35%] flex justify-between ">
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
