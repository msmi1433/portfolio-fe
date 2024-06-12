export const getProjects = async () => {
  const res = await fetch(
    "https://portfolio-db-v6qz.onrender.com/api/projects",
    {
      next: { revalidate: 3600 },
    }
  );
  const { projects } = await res.json();
  return projects;
};

export const getSingleProject = async (projectId: number) => {
  const resProj = await fetch(
    `https://portfolio-db-v6qz.onrender.com/api/projects/${projectId}`,
    { next: { revalidate: 3600 } }
  );
  const { project } = await resProj.json();
  const resStack = await fetch(
    `https://portfolio-db-v6qz.onrender.com/api/projects/${projectId}/stack`,
    { next: { revalidate: 3600 } }
  );
  const { stack } = await resStack.json();
  return { project, stack };
};
