import { Description, Project } from "@/types/common";
import DescriptionParagraph from "../common/DescriptionParagraph";
import ProjectImage from "./ProjectImage";
import { convertPeriodToString } from "@/utils/convertPeriodToString";
import { textToJSXWithBreaks } from "@/utils/textToJSXWithBreaks";

interface ProjectContentProps {
  project: Project;
}

const ProjectContent = (props: ProjectContentProps) => {
  const { project } = props;

  return (
    <div className="w-full box-border p-[2rem] flex flex-col gap-[2rem]">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-[1rem]">
        <ProjectImage src={project.image} />
        <div className="flex flex-col gap-[1rem] md:p-[1rem] md:flex-1">
          <p className="text-[1rem] md:text-[1.2rem]">
            {project.short_description}
          </p>
          <p>
            {convertPeriodToString(project.period_start, project.period_end)}
          </p>
          {project.additional_short_description && (
            <p>{textToJSXWithBreaks(project.additional_short_description)}</p>
          )}
        </div>
      </div>

      <div className="flex gap-x-[1rem] gap-y-[0.5rem] flex-wrap">
        {project.skills.map((skill) => (
          <div
            key={skill}
            className="py-[0.5rem] px-[1rem] rounded-[1.5rem] bg-white text-black hover:bg-black hover:text-white border-black border-2 text-[0.8rem] md:text-[1rem]"
          >
            {skill}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-[1.5rem] font-bold">🧩 상세 설명</h2>
        <div className="flex flex-col gap-[1rem]">
          {project.detail_description.map((des, idx) => (
            <DescriptionParagraph
              key={`detail_description(${idx})`}
              description={des as Description}
            />
          ))}
        </div>
      </div>

      {project.trouble_shooting && (
        <div className="flex flex-col gap-[1rem]">
          <h2 className="text-[1.5rem] font-bold">🛠️ 트러블 슈팅</h2>
          <div className="flex flex-col gap-[1rem]">
            {project.trouble_shooting.map((des, idx) => (
              <DescriptionParagraph
                key={`trouble_shooting(${idx})`}
                description={des as Description}
              />
            ))}
          </div>
        </div>
      )}

      {project.what_i_learn && (
        <div className="flex flex-col gap-[1rem]">
          <h2 className="text-[1.5rem] font-bold">🌱 배운점</h2>
          <div className="flex flex-col gap-[1rem]">
            {project.what_i_learn.map((des, idx) => {
              const description: Description = {
                title: des,
              };
              return (
                <DescriptionParagraph
                  description={description}
                  key={`what_i_learn(${idx})`}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectContent;
