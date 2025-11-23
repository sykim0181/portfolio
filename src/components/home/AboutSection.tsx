import { memo } from "react";
import Profile from "./Profile";

const AboutSection = () => {
  return (
    <section className="relative w-full z-1">
      <Profile />
    </section>
  );
};

export default memo(AboutSection);
