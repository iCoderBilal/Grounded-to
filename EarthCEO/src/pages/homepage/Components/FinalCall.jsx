import React from "react";
import forestImg from "../../../assets/forest.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FinalCall = () => {
  return (
    <div>
      <div className="finalCall w-[100%] bg-black relative pb-[8vw] pt-[2vw]">
        {/* <div className="w-full h-full absolute final-call-overlay z-[99] bg-[rgba(0,0,0,0.6)]"></div> */}
        <div className="final-call-container md:mx-[7vw] mx-6 md:h-[30vw] h-[58vh] rounded-[20px] py-[2vw] pb-6">
          <div className="final-call-content flex justify-center items-end h-[100%]">
            <div className="text-center z-[999]">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
                className="md:mb-[10px] mb-[20px] tracking-normal font-Poppins md:text-[4.5vw] text-[8vw] text-white font-semibold text-center md:leading-[6vw] leading-[8vw] z-[999]"
              >
                Secure Your Place in Tomorrow
              </motion.h2>
              <Link to="/exploreland">
                <a
                  href="#"
                  className="bg-[#C0DC61] text-gray-700 font-Poppins hover:text-gray-300 dark:text-white hover:bg-[#1d1d1d] focus:ring-4 focus:ring-gray-300 font-medium rounded-[20px] text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 duration-300 ease-in-out transition"
                >
                  Get Started
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCall;
