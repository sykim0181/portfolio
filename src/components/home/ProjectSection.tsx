import { motion } from "motion/react";
import { PROJECT_DATA } from "@/data/project";
import ProjectItem from "./ProjectItem";
import React, { useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import { appearMotionProps } from "@/constants/motion";

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
      className="relative w-full box-border py-12 z-1 flex flex-col gap-12"
    >
      <motion.h2
        className="text-5xl font-bold text-center font-[PartialSansKR-Regular]"
        {...appearMotionProps}
      >
        Project
      </motion.h2>

      <div className="w-(--default-width) max-w-(--max-width) flex flex-col items-center gap-8 mx-auto mt-[2rem]">
        <div className="flex gap-[1rem] mx-auto">
          {projectTypes.map((type) => (
            <ProjectNav
              key={`project-type-${type}`}
              isSelected={type === selectedType}
              onClick={() => onClickNav(type)}
            >
              {type}
            </ProjectNav>
          ))}
        </div>

        <div className="grid gap-[min(10vw,3rem)] w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

interface ProjectNavProps {
  isSelected?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const ProjectNav = (props: ProjectNavProps) => {
  const { isSelected, children, onClick } = props;

  return (
    <motion.div
      className={cn(
        "border-2 rounded-3xl px-4 py-1 cursor-pointer sm:text-lg",
        isSelected
          ? "bg-(--secondary-color) text-white"
          : "border-(--secondary-color) text-(--secondary-color)",
        "hover:bg-(--secondary-color) hover:text-white"
      )}
      onClick={onClick}
      {...appearMotionProps}
    >
      {children}
    </motion.div>
  );
};

export default ProjectSection;
