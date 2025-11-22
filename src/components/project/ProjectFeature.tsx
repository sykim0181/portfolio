import ProjectImageSwiper from "./ProjectImageSwiper";
import MarkDownContainer from "../common/MarkDownContainer";
import { cn } from "@/utils/cn";

interface ProjectFeatureProps {
  title: string;
  images?: string[];
  content: string[];
}

const ProjectFeature = ({ title, images, content }: ProjectFeatureProps) => {
  return (
    <div>
      <h3 className="text-base xs:text-lg font-bold">{title}</h3>
      {images && <ProjectImageSwiper images={images} />}
      <ul className="flex flex-col gap-2 mt-2">
        {content.map((dsct, index) => (
          <li
            key={`content-${index}`}
            className={cn([
              "flex gap-4 relative",
              "before:w-1 before:h-1 before:bg-black before:rounded-full before:relative before:top-[.625rem] before:shrink-0",
            ])}
          >
            <MarkDownContainer text={dsct} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFeature;
