export const revalidate = 60 * 60;

import { Root } from "@/components/common/Modal";
import ProjectModal from "@/components/project/ProjectModal";
import { Suspense } from "react";
import ProjectModalContents from "@/components/project/ProjectModalContents";
import Spinner from "@/components/common/Spinner";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <Root>
      <ProjectModal>
        <Suspense
          fallback={
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Spinner size={70} />
            </div>
          }
        >
          <ProjectModalContents projectId={id} />
        </Suspense>
      </ProjectModal>
    </Root>
  );
};

export default Page;
