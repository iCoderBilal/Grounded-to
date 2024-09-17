import { useState } from "react";
import Homepage from "./pages/homepage/Homepage";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutpage/AboutPage";
import "./App.css";
import ExploreLand from "./pages/exploreland/ExploreLand";
import Contact from "./pages/contactpage/Contact";

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
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exploreland" element={<ExploreLand />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/contactpage" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
