import React from "react";
import "./about.css";
import Header from "../homepage/Components/Header";
import AboutMain from "./Components/AboutMain";
import FinalCall from "../homepage/Components/FinalCall";
import Footer from "../homepage/Components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutMain />
      <FinalCall />
      <Footer />
    </>
  );
};

export default AboutPage;
