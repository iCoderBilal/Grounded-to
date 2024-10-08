import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Homepage from "./pages/homepage/Homepage";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutpage/AboutPage";
import "./App.css";
import ExploreLand from "./pages/exploreland/ExploreLand";
import Contact from "./pages/contactpage/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#5F7035", "#BDDC62"]
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

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
        <ScrollToTop />
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
