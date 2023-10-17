export const getProjects = async () => {
  const res = await fetch("https://msmi-portfolio.cyclic.app/api/projects");
  const { projects } = await res.json();
  return projects;
};

export const getSingleProject = async (projectId: number) => {
  const resProj = await fetch(
    `https://msmi-portfolio.cyclic.app/api/projects/${projectId}`,
    { next: { revalidate: 1 } }
  );
  const { project } = await resProj.json();
  const resStack = await fetch(
    `https://msmi-portfolio.cyclic.app/api/projects/${projectId}/stack`,
    { next: { revalidate: 1 } }
  );
  const { stack } = await resStack.json();
  return { project, stack };
};
