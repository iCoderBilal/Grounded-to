import { motion } from "framer-motion";

const rippleVariants = {
  hover: {
    background: [
      "linear-gradient(90deg, #34D399, #34D399)",
      "linear-gradient(90deg, #34D399, #C0DC61)",
      "linear-gradient(90deg, #C0DC61, #34D399)",
    ],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const AnimatedHeading = () => {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={rippleVariants}
      className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400"
    >
      Experience the Power of USDL
    </motion.h1>
  );
};

export default AnimatedHeading;
