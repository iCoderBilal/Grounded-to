"use client";
import React, { useRef, useState } from "react";
import land from "../../../assets/land.png";

const CardSpotlight = ({ cardImg, cardHeading, cardDescription }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="border-none relative h-[400px] w-[100%] flex flex-col justify-center overflow-hidden rounded border bg-[#101B18] px-8 py-12 shadow-2xl"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(183,220,101,.2), transparent 40%)`,
        }}
      />
      <div className="card-img p-[12px] bg-black rounded-[50%] w-[fit-content]">
        <img src={cardImg} className="w-[60px]" />
      </div>
      <h3 className="font-Poppins md:text-[1.8vw] text-[6vw] text-white font-semibold mt-[10px]">
        {" "}
        {cardHeading}
      </h3>
      <p className="text-gray-300 mt-[14px] text-left text-[16px] font-Poppins">
        {cardDescription}
      </p>
    </div>
  );
};

export default CardSpotlight;
