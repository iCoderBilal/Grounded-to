import { useState } from "react";
import Homepage from "./pages/homepage/Homepage";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#5F7035", "#BDDC62"]
  );

  return (
    <>
      <motion.div
        style={{
          scaleX: scaleX,

          transformOrigin: "left",
          background: background,

          position: "sticky",
          top: 0,
          width: "100%",
          height: "3px",
          zIndex: "99999",
        }}
      />
      <Homepage />
    </>
  );
}

export default App;
