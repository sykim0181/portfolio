import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import ProjectContent from "@/components/project/ProjectContent";
import { getProjectById } from "@/libs/supabase/query";
import ProjectHeader from "@/components/project/ProjectHeader";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const project = await getProjectById(Number(id));

  return (
    <div className="w-(--default-width) max-w-(--max-width) mx-auto py-[2rem]">
      <div className="flex px-[2rem] mb-[2rem]">
        <button className="text-[1.5rem] xs:text-[2rem]">
          <Link href="/">
            <AiFillHome />
          </Link>
        </button>
      </div>

      <div className="px-[2rem]">
        <ProjectHeader project={project} />
      </div>

      <ProjectContent project={project} />
    </div>
  );
};

export default Page;
