import React, { useEffect, useRef } from "react";
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
import InteractiveMap from "./Components/InteractiveMap";
import stateData from "./usStates.json"; // Ensure this path is correct based on your project structure
import NewMap from "../exploreland/Components/NewMap";
import FAQ from "./Components/FAQ";
import { Spotlight } from "../../components/Spotlight";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const howitworks = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo == "howitworks") {
      howitworks.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div>
      <Spotlight />
      <Hero howitworks={howitworks} />

      {/* <InteractiveMap stateData={stateData} /> */}
      <About />
      {/* <NewMap /> */}
      <Secure />

      <HowItWorks howitworks={howitworks} />
      <FAQ />
      <FinalCall />
      <Footer />
      {/* <VelocityScroll text="This is Something Great" /> */}
    </div>
  );
};

export default Homepage;
