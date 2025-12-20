import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section className="bg-neutral-50 w-full">
      <div
        className="
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-24
          pb-20
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
            title="Rupeeflow"
            description="A comprehensive financial management platform for small businesses."
            imageUrl="/images/mac1.png"
            caseStudyLink="/case-studies/rupeeflow"
            points={[
              "User-friendly interface",
              "Real-time analytics",
              "Secure transactions",
            ]}
          />

          <ProjectCard
            title="Pitch Design & Investor Narrative — RupeeFlow"
            description="Investor-facing pitch deck and narrative design focused on clarity, assumptions, and market framing."
            imageUrl="/images/mac1.png"
            caseStudyLink="/case-studies/pitch1"
            points={[
              "Assumption-driven market framing",
              "Clear financial logic",
              "Reduced investor ambiguity",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
