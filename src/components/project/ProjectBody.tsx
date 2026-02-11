import { Description, Feature, Issue, Project } from "@/types/common";
import DescriptionParagraph from "../common/DescriptionParagraph";
import { convertPeriodToString } from "@/utils/convertPeriodToString";
import MarkDownContainer from "../common/MarkDownContainer";
import ProjectImageSwiper from "./ProjectImageSwiper";
import ProjectFeature from "./ProjectFeature";
import ProjectIssue from "./ProjectIssue";

interface ProjectBodyProps {
  project: Project;
}

const ProjectBody = (props: ProjectBodyProps) => {
  const { project } = props;

  return (
    <div className="w-full box-border p-[1rem] sm:p-[2rem] flex flex-col gap-[2rem]">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-[1rem]">
        <ProjectImageSwiper images={project.images} />
        <div className="flex flex-col gap-[1rem] md:p-[1rem] md:flex-1">
          <p className="text-[1rem] md:text-[1.2rem]">
            {project.short_description}
          </p>
          <p>
            {convertPeriodToString(project.period_start, project.period_end)}
          </p>
          {project.additional_short_description && (
            <MarkDownContainer text={project.additional_short_description} />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-lg xs:text-xl md:text-2xl font-bold">
          💻 기술 스택
        </h2>
        <div className="flex gap-x-2 gap-y-2 flex-wrap">
          {project.skills.map((skill) => (
            <div
              key={skill}
              className="py-1 px-4 rounded-3xl bg-white text-black hover:bg-black hover:text-white border-black border-2 text-xs md:text-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {project.feature && (
        <div className="flex flex-col gap-4">
          <h2 className="text-lg xs:text-xl md:text-2xl font-bold">
            🧩 구현 기능
          </h2>
          <div className="flex flex-col gap-4">
            {project.feature.map((feat, idx) => (
              <ProjectFeature
                key={`feature-${idx + 1}`}
                title={`${idx + 1}. ${feat.title}`}
                images={feat.images}
                content={feat.content}
              />
            ))}
          </div>
        </div>
      )}

      {project.issue && (
        <div className="flex flex-col gap-4">
          <h2 className="text-lg xs:text-xl md:text-2xl font-bold">📌 이슈</h2>
          <div className="flex flex-col gap-4">
            {project.issue.map((iss, idx) => (
              <ProjectIssue key={`issue-${idx}`} issue={iss} />
            ))}
          </div>
        </div>
      )}

      {project.etc && (
        <div className="flex flex-col gap-[1rem]">
          <h2 className="text-lg xs:text-xl md:text-2xl font-bold">
            ➕ 기타 내용
          </h2>
          <div className="flex flex-col gap-[1rem]">
            {project.etc.map((des, idx) => (
              <DescriptionParagraph key={`etc-${idx})`} description={des} />
            ))}
          </div>
        </div>
      )}

      {project.what_i_learn && (
        <div className="flex flex-col gap-[1rem]">
          <h2 className="text-lg xs:text-xl md:text-2xl font-bold">
            🌱 배운점
          </h2>
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

export default ProjectBody;
