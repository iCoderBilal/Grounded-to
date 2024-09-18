import React from "react";
import Arrow from "../../../assets/arrow.png";

const AboutMain = () => (
  <div>
    <div className="about-main">
      <div className="relative about-main-container bg-[#101B18] md:mx-[7vw] mx-[4vw] my-[3vw] md:p-[50px] p-[15px] rounded-[10px]">
        <img
          src={Arrow}
          className="w-[60px] mx-auto absolute top-[-25px] left-[48%]"
        />

        <h2 className="text-center tracking-tight font-Poppins md:text-[3.2vw] text-[6vw] md:leading-[3.8vw] leading-[6.5vw] text-white font-semibold mb-[30px] md:mt-0 mt-[50px]">
          {" "}
          Our goal is simple to help you stay grounded in an ever-accelerating
          world
        </h2>

        <div className="about-card-main md:py-[70px] py-[20px] flex flex-col gap-[15px]">
          <div className="about-card md:w-[35vw] w-[100%] bg-black md:px-8 px-4 py-12 rounded-[10px]">
            <div className="card-img p-[12px] bg-black rounded-[50%] w-[fit-content]">
              {/* <img src={cardImg} className="w-[60px]" /> */}
            </div>
            <h3 className="font-bold section-heading font-Poppins md:text-[1.8vw] text-[6vw] text-white mt-[-20px]">
              The Hardest Asset in a Post-AGI World
            </h3>
            <p className="text-gray-300 mt-[14px] text-left text-[16px] font-Poppins">
              In a world dominated by artificial general intelligence (AGI) and
              exponential technological growth, land stands apart as the
              ultimate hard currency. Unlike other assets that can be created or
              manipulated, land is finite, tangible, and irreplaceable. We
              offers you the opportunity to secure your future with the scarcest
              and most valuable asset—land.
            </p>
          </div>

          {/* ________________________________________ */}

          <div className="about-card md:w-[35vw] w-[100%] bg-black md:px-8 px-4 py-12 rounded-[10px] self-end md:mt-[-120px]">
            <div className="card-img p-[12px] bg-black rounded-[50%] w-[fit-content]">
              {/* <img src={cardImg} className="w-[60px]" /> */}
            </div>
            <h3 className="font-bold section-heading font-Poppins md:text-[1.8vw] text-[6vw] text-white mt-[-20px]">
              Securing Your Wealth
            </h3>
            <p className="text-gray-300 mt-[14px] text-left text-[16px] font-Poppins">
              Investing in land is more than just a financial decision—it's
              about securing your future. Unlike other assets, land cannot be
              created or replicated. It's a stable, reliable investment that
              provides real value in an unpredictable world. With Us, you can
              own a piece of the United States, ensuring that your wealth is as
              secure as the ground beneath your feet.
            </p>
          </div>

          {/* ____________________________________ */}

          <div className="about-card md:w-[35vw] w-[100%] bg-black md:px-8 px-4 py-12 rounded-[10px] md:mt-[-120px]">
            <div className="card-img p-[12px] bg-black rounded-[50%] w-[fit-content]">
              {/* <img src={cardImg} className="w-[60px]" /> */}
            </div>
            <h3 className="font-bold section-heading font-Poppins md:text-[1.8vw] text-[6vw] text-white mt-[-20px]">
              Why $USDL Is Different ?
            </h3>
            <p className="text-gray-300 mt-[14px] text-left text-[16px] font-Poppins">
              Traditional investments often come with hidden fees and unexpected
              costs. Like your financial advisor’s new Corvette? You should—you
              helped pay for it with all those advisor fees. e’re different. Our
              platform is transparent, straightforward, and designed to maximize
              your returns. We make land ownership simple, accessible, and
              profitable.
            </p>
          </div>

          {/* ____________________________________ */}

          <div className="about-card md:w-[35vw] w-[100%] bg-black md:px-8 px-4 py-12 rounded-[10px] self-end md:mt-[-120px]">
            <div className="card-img p-[12px] bg-black rounded-[50%] w-[fit-content]">
              {/* <img src={cardImg} className="w-[60px]" /> */}
            </div>
            <h3 className="font-bold section-heading font-Poppins md:text-[1.8vw] text-[6vw] text-white mt-[-20px]">
              The Ultimate Legacy
            </h3>
            <p className="text-gray-300 mt-[14px] text-left text-[16px] font-Poppins">
              Imagine owning a piece of land that no technology can replicate—a
              timeless asset that stands above the volatility of modern markets.
              In a world where AGI and autonomous systems reshape everything we
              know, land remains one of the few truly finite resources. Its
              scarcity is what makes it so valuable.
            </p>
          </div>

          {/* ____________________________________ */}
        </div>
      </div>
    </div>
  </div>
);

export default AboutMain;
