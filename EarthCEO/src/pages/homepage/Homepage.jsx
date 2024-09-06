import React from "react";
import Hero from "./Components/Hero";
import "./homepage.css";
import Secure from "./Components/Secure";
import About from "./Components/About";
import CardSpotlight from "./Components/AnimatedCard";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Secure />
      <CardSpotlight />
    </div>
  );
};

export default Homepage;
