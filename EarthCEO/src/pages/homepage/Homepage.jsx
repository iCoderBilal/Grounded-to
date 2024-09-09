import React from "react";
import Hero from "./Components/Hero";
import "./homepage.css";
import Secure from "./Components/Secure";
import About from "./Components/About";
import HowItWorks from "./Components/HowItWorks";
import { VelocityScroll } from "../../components/Scroll";
import FinalCall from "./Components/FinalCall";
import Footer from "./Components/Footer";
import FramerMotion from "./Components/FramerMotion";
import AnimatedHeading from "./Components/FramerMotion";

const Homepage = () => {
  return (
    <div>
      <Hero />

      <About />
      <Secure />

      <HowItWorks />

      <FinalCall />
      <Footer />
      {/* <VelocityScroll text="This is Something Great" /> */}
    </div>
  );
};

export default Homepage;
