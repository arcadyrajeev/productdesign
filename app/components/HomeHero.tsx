import React from "react";
import HeroGraphic from "./HeroGraphic";

const HomeHero = () => {
  return (
    <div className="bg-neutral-50  w-full p-4 lg:p-24">
      <h1 className="heading text-5xl md:text-6xl lg:text-7xl text-primary-text  px-3 mt-22 lg:mt-16 w-full lg:w-[60%]">
        Make your business legible to{" "}
        <span className="text-accent">Capital</span>
      </h1>
      <div className="w-full flex justify-end">
        <h1 className="p-4 text-lg w-[80%] lg:w-[50%] text-2xl text-left heading text-primary-text/90 font-light lg:leading-8 tracking-tight  pt-8">
          I help{" "}
          <span className="font-medium text-accent">fintech and SaaS</span>{" "}
          founders align brand, product, and narrative so the business is
          understood, by <span className="font-medium ">users</span> ,{" "}
          <span className="font-medium ">investors</span>, and{" "}
          <span className="font-medium ">the market</span>.
        </h1>
      </div>
      <div className="w-full px-2 lg:px-10 py-15 flex ">
        <HeroGraphic />
      </div>
    </div>
  );
};

export default HomeHero;
