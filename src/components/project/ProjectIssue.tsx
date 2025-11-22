"use client";

import { Description, Issue } from "@/types/common";
import { cn } from "@/utils/cn";
import MarkDownContainer from "../common/MarkDownContainer";
import DescriptionParagraph from "../common/DescriptionParagraph";
import { useState } from "react";

interface ProjectIssueProps {
  issue: Issue;
}

const ProjectIssue = ({ issue }: ProjectIssueProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3
        className={cn(
          "text-base xs:text-lg font-bold underline opacity-50 hover:opacity-100 cursor-pointer block w-fit",
          isOpen && "opacity-100"
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {issue.title}
      </h3>
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4">
          {issue.problem && <Part title="문제" content={issue.problem} />}
          {issue.approach && <Part title="접근" content={issue.approach} />}
          {issue.solution && <Part title="해결" content={issue.solution} />}
          {issue.accomplishment && (
            <Part title="성과" content={issue.accomplishment} />
          )}
        </div>
      )}
    </div>
  );
};

interface PartProps {
  title: string;
  content: string[] | Description[];
}

const Part = ({ title, content }: PartProps) => {
  return (
    <div>
      <h4 className="font-bold">{title}</h4>
      <ul className="flex flex-col gap-2 mt-2">
        {content.map((ctt, idx) => {
          const isString = typeof ctt === "string";
          return isString ? (
            <li
              key={`content-${idx}`}
              className={cn([
                "flex gap-4 relative",
                "before:w-1 before:h-1 before:bg-black before:rounded-full before:relative before:top-[.625rem] before:shrink-0",
              ])}
            >
              <MarkDownContainer text={ctt} />
            </li>
          ) : (
            <DescriptionParagraph key={`content-${idx}`} description={ctt} />
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectIssue;
