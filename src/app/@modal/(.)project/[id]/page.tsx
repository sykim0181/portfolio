import { Root } from "@/components/common/Modal";
import ProjectModal from "@/components/project/ProjectModal";
import { Suspense } from "react";
import ProjectModalContents from "@/components/project/ProjectModalContents";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <Root>
      <ProjectModal>
        <Suspense>
          <ProjectModalContents projectId={id} />
        </Suspense>
      </ProjectModal>
    </Root>
  );
};

export default Page;
