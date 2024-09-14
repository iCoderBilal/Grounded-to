import React from "react";
import CardSpotlight from "./AnimatedCard";
import landImg from "../../../assets/land.png";
import dollarImg from "../../../assets/dollar.png";
import growthImg from "../../../assets/growth.png";

const HowItWorks = () => {
  return (
    <div>
      <div className="how-works">
        <div className="how-container px-6 py-[30vw] md:px-[7vw] md:py-[9vw] bg-black text-white">
          <div className="heading">
            <h2 className="text-center section-heading mb-8 md:mb-[30px] tracking-tighter font-Poppins text-3xl md:text-[6vw] text-[9vw] text-white font-semibold md:leading-[6vw] leading-[9vw]">
              How USDL Works
            </h2>
          </div>

          <div className="how-cards flex flex-col md:flex-row justify-between gap-8 md:gap-0">
            <div className="basis-full sm:basis-[100%] md:basis-[30%]">
              <CardSpotlight
                cardImg={landImg}
                cardHeading="Tokenization of Land"
                cardDescription="USDL transforms real-world land into digital tokens, representing fractional ownership of a specific parcel. Each USDL token is backed by actual land, making it a secure and tangible investment."
              />
            </div>

            <div className="basis-full md:basis-[30%]">
              <CardSpotlight
                cardImg={dollarImg}
                cardHeading="Purchase USDL Tokens"
                cardDescription="Investors can easily purchase USDL tokens through our platform. These tokens allow you to own a share of valuable real estate without the complexities of traditional land investment."
              />
            </div>

            <div className="basis-full md:basis-[30%]">
              <CardSpotlight
                cardImg={growthImg}
                cardHeading="Grow Your Investment"
                cardDescription="As land appreciates over time, so does the value of your USDL tokens. Enjoy the benefits of a stable, land-backed currency designed to withstand market volatility and the evolving technological landscape."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
