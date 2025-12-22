import React from "react";

const CSHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-neutral-50  w-full p-4 portrait:lg:pt-16 landscape:lg:pt-32 lg:px-36">
      <h1
        className="
            text-xl sm:text-2xl  md:text-3xl lg:text-5xl
            heading
            font-medium md:font-normal
            tracking-tight
            text-primary-text
            max-w-3xl
            mx-auto lg:mx-0
            leading-tight
          "
      >
        Case Studies
      </h1>
      <h2 className="heading text-secondary-text text-sm w-[25%]">
        Work focused on clarity, risk, and decision-making, not surface-level
        design
      </h2>
    </div>
  );
};

export default CSHero;
