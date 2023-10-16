import { getSingleProject } from "@/utils/apiCalls";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  project: {
    project_name: string;
    project_description: string;
    project_link: string;
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
    <div className="flex items-center h-full">
      <section className="grid grid-cols-2 w-full gap-x-16">
        <h1 className="text-7xl text-periwinkle underline pb-5">
          {project.project_name}
        </h1>
        <div className="col-start-1 flex flex-col justify-around">
          {project.video ? (
            <iframe
              width="640"
              height="360"
              src={project.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <Image
              className="col-start-1 rounded"
              alt={"project screenshot"}
              src={project.image}
              width={600}
              height={10}
            />
          )}
        </div>
        <div className="col-start-2 flex flex-col justify-around">
          <div>
            <p>{project.project_description}</p>
          </div>
          <div className="flex justify-start gap-20 content-start">
            <div>
              <h3 className="text-3xl text-periwinkle underline">Tech Stack</h3>
              <ul className="flex flex-col justify-start">
                {stack.map((tech) => {
                  return <li key={tech}>{tech}</li>;
                })}
              </ul>
            </div>
            <div className="flex justify-start flex-col">
              <h3 className="text-3xl text-periwinkle underline">Links</h3>
              {project.project_link ? (
                <span>
                  <Link
                    href={project.project_link}
                    className="hover:text-periwinkle transition-colors"
                    target="_blank"
                  >
                    Hosted Project
                  </Link>
                </span>
              ) : null}
              {project.github_link_be && project.github_link_fe ? (
                <>
                  {" "}
                  <Link
                    href={project.github_link_fe}
                    className="hover:text-periwinkle transition-colors"
                    target="_blank"
                  >
                    Frontend GitHub Repo
                  </Link>
                  <Link
                    href={project.github_link_be}
                    className="hover:text-periwinkle transition-colors"
                    target="_blank"
                  >
                    Backend GitHub Repo
                  </Link>
                </>
              ) : project.github_link_be ? (
                <Link
                  href={project.github_link_be}
                  className="hover:text-periwinkle transition-colors"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              ) : (
                <Link
                  href={project.github_link_fe}
                  className="hover:text-periwinkle transition-colors"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProject;
