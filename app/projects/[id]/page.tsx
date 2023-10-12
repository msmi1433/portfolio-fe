import { getSingleProject } from "@/utils/apiCalls";
import React from "react";
import Image from "next/image";

interface Project {
  project: {
    project_name: string;
    project_description: string;
    image: string;
    video: string;
    github_link_fe: string;
    github_link_be: string;
  };
  stack: string[];
}

const SingleProject = async ({ params }: { params: { id: number } }) => {
  const projectId = params.id;
  const { project, stack }: Project = await getSingleProject(projectId);

  return (
    <section className="grid grid-cols-2 h-screen">
      <h1 className="col-start-1 row-start-1">{project.project_name}</h1>
      <Image
        className="col-start-1"
        alt={"project screenshot"}
        src={project.image}
        width={200}
        height={200}
      />
      <p className="col-start-2">{project.project_description}</p>
      <div>
        <a href={project.github_link_fe}>Frontend Repo</a>
        <a href={project.github_link_be}>Backend Repo</a>
      </div>
      <div>
        <h3>Tech Stack</h3>
        <ul>
          {stack.map((tech) => {
            return <li key={tech}>{tech}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default SingleProject;
