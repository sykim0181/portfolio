import Cursor from "@/components/common/Cursor";
import Intro from "@/components/home/Intro";
import Sections from "@/components/home/Sections";

export default function Home() {
  return (
    <div className="relative">
      <Intro />

      <Sections />
      <Cursor />
    </div>
  );
}
