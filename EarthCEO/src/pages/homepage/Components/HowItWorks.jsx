import React from "react";
import CardSpotlight from "./AnimatedCard";
import landImg from "../../../assets/land.png";
import dollarImg from "../../../assets/dollar.png";
import growthImg from "../../../assets/growth.png";

const HowItWorks = () => {
  const cards = [1, 2, 3];
  return (
    <div>
      <div className="how-works">
        <div className="how-container px-[7vw] py-[7vw] bg-black text-white">
          <div className="heading">
            <h2 className="section-heading mb-[30px] tracking-tighter font-Poppins text-[6vw] text-white font-semibold">
              How USDL Works
            </h2>
          </div>

          <div className="how-cards flex justify-between">
            <div className="basis-[30%]">
              <CardSpotlight
                cardImg={landImg}
                cardHeading="Tokenization of Land"
                cardDescription="USDL transforms real-world land into digital tokens. Each USDL token represents fractional ownership of a specific parcel of land, providing a tangible and stable backing for the digital currency."
              />
            </div>

            <div className="basis-[30%]">
              <CardSpotlight
                cardImg={dollarImg}
                cardHeading="Purchase USDL Tokens"
                cardDescription="Investors can easily buy USDL tokens through our platform. These tokens allow you to own a share of valuable real estate without the complexities of traditional land investment."
              />
            </div>

            <div className="basis-[30%]">
              <CardSpotlight
                cardImg={growthImg}
                cardHeading="Grow Your Investment"
                cardDescription="As land appreciates over time, so does the value of your USDL tokens. Enjoy a secure and future-proof investment backed by one of the most stable assets—land."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
