import Profile from "./Profile";

interface AboutSectionProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const AboutSection = ({ ref }: AboutSectionProps) => {
  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full z-1"
    >
      <Profile />
    </section>
  );
};

export default AboutSection;
