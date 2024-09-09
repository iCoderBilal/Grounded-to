import React from "react";
import { motion } from "framer-motion";

const FramerMotion = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] w-[100%]">
        <motion.div
          initial={{
            rotate: 0,
          }}
          whileInView={{
            rotate: 0,
            y: [0, 100, -70, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
            times: [0.1, 0.8, 0.1, 1],
          }}
          className="framer-motion w-[400px] h-[400px] bg-pink-400"
        ></motion.div>
      </div>
    </div>
  );
};

export default FramerMotion;
