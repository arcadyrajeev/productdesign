import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div className="bg-neutral-50 w-full px-24 pb-20 flex flex-col">
      <h1 className="heading text-2xl text-center text-primary-text/90 mb-8">
        Featured Case Studies
      </h1>
      <div className="flex flex-col w-full gap-24 mb-20">
        <ProjectCard />

        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectSection;
