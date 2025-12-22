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

  const yBackground = useParallax(scrollYProgress, 120);
  const yText = useParallax(scrollYProgress, 200);
  const yImage = useParallax(scrollYProgress, 400);
  const yContent = useParallax(scrollYProgress, -200);

  return (
    <main
      ref={containerRef}
      className="relative w-full bg-neutral-50 px-4 lg:px-24 text-neutral-900 overflow-hidden"
    >
      {/* Hero */}
      <section className="absolute z-10 max-w-6xl mx-auto  pt-16">
        <motion.div
          style={{ y: yText }}
          className="flex flex-col pt-[18rem] lg:pt-[20rem]"
        >
          <h1 className="text-xl font-medium text-secondary-text heading tracking-tight my-4 ">
            Rajeev Das
          </h1>
          <h1 className="text-4xl md:text-7xl max-w-4xl text-primary-text heading tracking-tight ">
            Product & Narrative Strategy Partner for{" "}
            <span className="text-accent">Fintech</span>.
          </h1>
        </motion.div>
      </section>

      {/* Image */}
      <motion.section
        style={{ y: yImage }}
        className="relative z-5 max-w-4xl ml-auto px-6 md:px-12 lg:px-[7.5rem] translate-y-4 lg:-translate-y-12 lg:translate-x-30 "
      >
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden ">
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
        className="relative  z-20 w-full border border-neutral-400 rounded-2xl mx-auto px-6 md:px-12 lg:px-[7.5rem] mt-16 lg:mt-0 pb-32 backdrop-blur-md md:p-16"
      >
        <div className="relative mx-auto lg:max-w-4xl flex flex-col gap-8  p-10 ">
          <p className="text-neutral-700 leading-relaxed text-xl md:text-2xl">
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
    </main>
  );
}
