import { projectData } from "@/data/project";
import ProjectItem from "./ProjectItem";

interface ProjectSectionProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const ProjectSection = ({ ref }: ProjectSectionProps) => {
  return (
    <section 
      id="projects" 
      ref={ref}
      className="relative w-full box-border py-[3rem] z-1 bg-(--bg-color)"
    >
      <h2 className="text-white font-[PartialSansKR-Regular] text-[min(15vw,6rem)] font-normal">
        Project
      </h2>
      <div className="w-(--default-width) max-w-(--max-width) flex flex-col items-center mx-auto mt-[2rem]">
        <div className="grid gap-[min(10vw,3rem)] w-full grid-cols-2 md:grid-cols-3">
          {projectData.map((project) => (
            <ProjectItem
              key={project.name}
              id={project.id}
              name={project.name}
              imgSrc={project.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;