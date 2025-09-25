import { IoClose } from "react-icons/io5";
import { CloseButton, Root } from "@/components/common/Modal";
import ProjectContent from "@/components/project/ProjectContent";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectModal from "@/components/project/ProjectModal";
import { getProjectById } from "@/libs/supabase/query";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const project = await getProjectById(Number(id));

  return (
    <Root>
      <ProjectModal>
        <div className="flex sticky top-0 left-0 py-[1rem] px-[1rem] sm:px-[2rem] gap-[1rem] bg-white z-5">
          <ProjectHeader project={project} />
          <CloseButton className="flex justify-center items-center text-black text-[1.5rem] xs:text-[2rem]">
            <IoClose />
          </CloseButton>
        </div>
        <ProjectContent project={project} />
      </ProjectModal>
    </Root>
  );
};

export default Page;
