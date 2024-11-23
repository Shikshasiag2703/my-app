import Link from "next/link";
import React from "react";

const Project = ({ project }) => {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg mx-0 mt-0 mb-6 h-60">
        <iframe className="w-full h-full" src={project.url} />
      </div>
      <div className="p-0">
        <Link className="hover:underline" href={project.url} target="_blank">
          <div className="flex items-center gap-2 mb-2">
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit">
              {project.title}
            </h5>
            <img src="link.svg" alt="link" width={20} height={20} />
          </div>
        </Link>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default Project;
