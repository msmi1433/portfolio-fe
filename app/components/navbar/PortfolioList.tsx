import { getProjects } from "@/utils/apiCalls";
import React from "react";
import Link from "next/link";

interface Project {
  project_id: number;
  project_name: string;
}

const PortfolioList = async () => {
  const projects: Project[] = await getProjects();

  return (
    <div className="flex flex-col">
      <h3 className="text-3xl underline">Portfolio</h3>
      {projects.map((project) => {
        return (
          <Link
            href={`./projects/${project.project_id}`}
            key={project.project_id}
          >
            {project.project_name}
          </Link>
        );
      })}
    </div>
  );
};

export default PortfolioList;
