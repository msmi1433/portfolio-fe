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
    <div className="flex items-center xl:h-full py-10 xl:mt-0 xl:my-0">
      <section className="xl:grid grid-cols-2 w-full gap-x-16 flex flex-col gap-5">
        <h1 className="text-5xl xl:text-7xl text-periwinkle underline pb-5">
          {project.project_name}
        </h1>
        <div className="col-start-1 flex flex-col justify-around">
          {project.video ? (
            <iframe
              className="xl:w-130 xl:h-90"
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
        <div className="col-start-2 flex flex-col justify-around gap-5">
          <div>
            <p>{project.project_description}</p>
          </div>
          <div className="flex justify-start gap-20 content-start">
            <div>
              <h3 className="xl:text-3xl text-2xl text-periwinkle underline">
                Stack
              </h3>
              <ul className="flex flex-col justify-start">
                {stack.map((tech) => {
                  return (
                    <li className="my-0.5" key={tech}>
                      {tech}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex justify-start flex-col">
              <h3 className="xl:text-3xl text-2xl text-periwinkle underline">
                Links
              </h3>
              {project.project_link ? (
                <span className="my-0.5">
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
                  <Link
                    href={project.github_link_fe}
                    className="hover:text-periwinkle transition-colors my-0.5"
                    target="_blank"
                  >
                    Frontend GitHub Repo
                  </Link>
                  <Link
                    href={project.github_link_be}
                    className="hover:text-periwinkle transition-colors my-0.5"
                    target="_blank"
                  >
                    Backend GitHub Repo
                  </Link>
                </>
              ) : project.github_link_be ? (
                <Link
                  href={project.github_link_be}
                  className="hover:text-periwinkle transition-colors my-0.5"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              ) : (
                <Link
                  href={project.github_link_fe}
                  className="hover:text-periwinkle transition-colors my-0.5"
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
