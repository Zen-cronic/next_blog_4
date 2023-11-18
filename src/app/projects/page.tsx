import projects from "@/constants/projectsInfo";
import React from "react";
import ProjectItem from "../components/ProjectItem";

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-5 grid-rows-3 justify-center items-center mt-6">

        {projects.map((project, idx) => (
          <ProjectItem project={project} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
