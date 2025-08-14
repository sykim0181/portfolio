import { PROJECT_DATA } from "@/data/project";
import ProjectItem from "./ProjectItem";
import { ComponentProps, useMemo, useState } from "react";
import { cn } from "@/utils/cn";

interface ProjectSectionProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const projectTypes = ["All", "Personal", "Team", "Work"] as const;
type ProjectType = (typeof projectTypes)[number];

const ProjectSection = ({ ref }: ProjectSectionProps) => {
  const [selectedType, setSelectedType] = useState<ProjectType>("All");

  const projectData = useMemo(() => {
    if (selectedType === "All") {
      return PROJECT_DATA;
    }
    return PROJECT_DATA.filter(
      (project) => project.type === selectedType.toUpperCase()
    );
  }, [selectedType]);

  const onClickNav = (type: ProjectType) => setSelectedType(type);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full box-border py-[3rem] z-1 bg-(--bg-color)"
    >
      <h2 className="text-white font-[PartialSansKR-Regular] text-[min(15vw,6rem)] font-normal">
        Project
      </h2>
      <div className="w-(--default-width) max-w-(--max-width) flex flex-col items-center gap-[1.5rem] mx-auto mt-[2rem]">
        <div className="flex gap-[1rem] w-full">
          {projectTypes.map((type) => (
            <ProjectNav
              isSelected={type === selectedType}
              onClick={() => onClickNav(type)}
            >
              {type}
            </ProjectNav>
          ))}
        </div>

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
};

interface ProjectNavProps extends ComponentProps<"div"> {
  isSelected?: boolean;
}

const ProjectNav = (props: ProjectNavProps) => {
  const { isSelected, children, ...otherProps } = props;
  return (
    <div
      className={cn(
        "border-1 rounded-[10px] px-[0.8rem] py-[0.3rem] cursor-pointer",
        isSelected && "bg-black text-white"
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default ProjectSection;
