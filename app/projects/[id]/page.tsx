import { getSingleProject } from "@/utils/apiCalls";
import React from "react";

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
    <section>
      <h1>{project.project_name}</h1>
    </section>
  );
};

export default SingleProject;
