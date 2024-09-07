import React from "react";
import Hero from "./Components/Hero";
import "./homepage.css";
import Secure from "./Components/Secure";
import About from "./Components/About";
import HowItWorks from "./Components/HowItWorks";
import { VelocityScroll } from "../../components/Scroll";
import FinalCall from "./Components/FinalCall";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Secure />
      <HowItWorks />

      <FinalCall />
      {/* <VelocityScroll text="This is Something Great" /> */}
    </div>
  );
};

export default Homepage;
