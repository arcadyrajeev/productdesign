"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const useParallax = (scrollYProgress: any, distance: number) => {
  return useTransform(scrollYProgress, [0, 1], [0, distance]);
};

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useParallax(scrollYProgress, 20);
  const yText = useParallax(scrollYProgress, 50);
  const yImage = useParallax(scrollYProgress, 200);
  const yContent = useParallax(scrollYProgress, -100);

  return (
    <main
      ref={containerRef}
      className="relative w-full bg-neutral-50 px-4 md:px-10 lg:px-24 text-neutral-900 overflow-hidden"
    >
      {/* Hero */}
      <section className="absolute z-10 flex px-2 mx-auto pt-16">
        <motion.div
          style={{ y: yText }}
          className="flex flex-col pt-[32vw] md:pt-[20vh] px-2 lg:pt-[15rem]"
        >
          <h1 className="text-md md:text-xl  font-medium text-secondary-text heading tracking-tight lg:my-8 my-4 ">
            Rajeev Das
          </h1>
          <h1 className=" text-[6vw] portrait:md:text-5xl landscape:md:text-7xl max-w-3xl landscape:max-w-4xl   text-primary-text heading tracking-tight ">
            Product & Narrative Strategy Partner for{" "}
            <span className="text-accent">Fintech</span>.
          </h1>
          <h1 className="text-sm md:text-xl font-medium text-secondary-text max-w-2xl heading tracking-tight my-4 lg:my-8 ">
            Clarity over persuasion. Product, narrative, and risk clarity for
            complex systems.
          </h1>
        </motion.div>
      </section>
      {/* Image */}
      <motion.section
        style={{ y: yImage }}
        className="relative z-5 max-w-5xl px-2 md:px-12 lg:px-[12vw] translate-y-4 mb-[10vw] lg:translate-x-[25vw] md:translate-x-25 translate-y-15 "
      >
        <div className="relative portrait:h-[50vh] landscape:h-[100vh] rounded-xl overflow-hidden ">
          <img
            src="/images/imagerkd2.png"
            alt="Portrait"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.section>
      {/* Content */}
      <motion.section
        style={{ y: yContent }}
        className="relative  z-20 w-full border border-neutral-400 rounded-2xl mx-auto py-[16vw] px-[10vw] md:px-12 lg:px-[8vw] mt-[25vw] md:mt-0  backdrop-blur-md p md:p-16"
      >
        <div className="relative mx-auto lg:max-w-4xl flex flex-col gap-8  ">
          <p className="text-neutral-700 leading-relaxed text-justify text-sm md:text-2xl">
            I help <span className="text-accent">fintech</span>. founders align
            product, narrative, and trust so the business explains itself,
            clearly, consistently, and without constant interpretation.
          </p>

          <a
            href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
            target="_blank"
            rel="noopener noreferrer"
            className=" text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
          >
            Start a conversation
          </a>
        </div>
      </motion.section>
      <motion.section
        style={{ y: yContent }}
        className="relative  z-20 w-full  rounded-2xl mx-auto py-[16vw] px-[4vw] md:px-12 lg:px-[8vw] mt-[4vw] md:mt-4   md:p-16"
      >
        <div className="relative mx-auto lg:max-w-4xl flex flex-col gap-8  ">
          <p className="text-neutral-700 leading-relaxed text-justify text-sm md:text-2xl">
            I help <span className="text-accent">fintech</span>. founders align
            product, narrative, and trust so the business explains itself,
            clearly, consistently, and without constant interpretation.
          </p>

          <a
            href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
            target="_blank"
            rel="noopener noreferrer"
            className=" text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
          >
            Start a conversation
          </a>
        </div>
      </motion.section>{" "}
    </main>
  );
}
