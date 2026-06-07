
import { ProjectCard } from "./ProjectCard";
import { projects } from "./ProjectData";

export const Projects = () => {
  return (
    <section id="projects"
    className="
    mx-auto
    max-w-7xl
    px-6
    py-20
    grid
    gap-8
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    justify-items-center
  ">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          {...project}
        />
      ))}
    </section>
  );
};