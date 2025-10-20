import { getProjectById } from "@/libs/supabase/query";
import ProjectHeader from "./ProjectHeader";
import { CloseButton } from "../common/Modal";
import { IoClose } from "react-icons/io5";
import ProjectBody from "./ProjectBody";

interface Props {
  projectId: string;
}

const ProjectModalContents = async ({ projectId }: Props) => {
  const project = await getProjectById(Number(projectId));

  return (
    <>
      <div className="flex sticky top-0 left-0 py-[1rem] px-[1rem] sm:px-[2rem] gap-[1rem] bg-white z-5">
        <ProjectHeader project={project} />
        <CloseButton className="flex justify-center items-center text-black text-[1.5rem] xs:text-[2rem]">
          <IoClose />
        </CloseButton>
      </div>
      <ProjectBody project={project} />
    </>
  );
};

export default ProjectModalContents;
