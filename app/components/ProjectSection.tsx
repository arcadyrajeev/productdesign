import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ProjectSection = () => {
  return (
    <section className="bg-neutral-50 w-full">
      <div
        className="
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-24
          py-[2vw] sm:py-10 md:py-12 portrait:lg:py-4 landscape:lg:py-16
          flex flex-col
        "
      >
        {/* Section Heading */}
        <h1
          className="
            heading
            text-md sm:text-md md:text-xl
            text-center
            text-primary-text/90
            mb-4 sm:mb-8
          "
        >
          Featured Case Studies
        </h1>

        {/* Cards */}
        <div
          className="
            flex flex-col
            w-full
            gap-16 sm:gap-20 lg:gap-24
          "
        >
          <ProjectCard
            title="Product & narrative design | Rupeeflow"
            description="Aligning product logic, user flows, and business narrative for a high-friction cross-border payments platform."
            imageUrl="/images/rupeeflow-product.png"
            caseStudyLink="/case-studies/rupeeflow"
            points={[
              "User-friendly interface",
              "Real-time analytics",
              "Secure transactions",
            ]}
          />

          <ProjectCard
            title="Pitch Design & Investor Narrative - RupeeFlow"
            description="Investor-facing pitch deck and narrative design focused on clarity, assumptions, and market framing."
            imageUrl="/images/rupeeflow-pitch.png"
            caseStudyLink="/case-studies/pitch1"
            points={[
              "Assumption-driven market framing",
              "Clear financial logic",
              "Reduced investor ambiguity",
            ]}
          />
        </div>
        <div className=" my-14 flex items-center justify-center">
          <Link
            href={"/case-studies"}
            className="heading text-primary-text  font-medium hover:text-accent hover:underline py-2 px-4 underline-offset-5 transition-colors"
          >
            View All Case Studies
            <ArrowUpRight size={20} className="inline-block ml-2 mb-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
