import PROJECTS from "@/constants/projectsInfo";
import React from "react";
import ProjectItem from "../components/ProjectItem";

export default function ProjectsPage() {
  return (
    <div className="mx-auto sm:max-w-5xl ">
      {/* grid-rows-3  */}
      <div className="grid gap-5 justify-center items-center mt-6 sm:w-full w-11/12 mx-auto">
        {PROJECTS.map((project, idx) => (
          <ProjectItem project={project} key={idx} />
        ))}
      </div>
    </div>
  );
}
