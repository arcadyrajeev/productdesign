import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = () => {
  return (
    <div className="flex portrait:flex-col w-full h-[70vh] border border-neutral-300/90 rounded-2xl overflow-hidden">
      <div className="portrait:w-full landscape:w-[50%] h-full p-16 flex flex-col justify-center">
        <h1 className="heading text-primary-text/90 text-4xl">Project Title</h1>{" "}
        <p className="text-secondary-text/90 text-md mt-4">
          A brief description of the project goes here. It highlights the main
          features and objectives of the project.
        </p>
        <Link
          href={"/"}
          className="flex gap-4 justify-center mt-8 w-[42%] bg-primary-text text-white py-3 rounded-full hover:bg-accent transition"
        >
          View Case Study
          <ArrowUpRight />
        </Link>
      </div>
      <div className="flex bg-neutral-200/90 portrait:w-full landscape:w-[50%] h-full items-center justify-center">
        {" "}
        <Image src="/images/mac1.png" height={200} width={420} alt="demo" />
      </div>
    </div>
  );
};

export default ProjectCard;
