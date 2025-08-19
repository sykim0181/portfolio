import NewProfile from "./NewProfile";

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
      <NewProfile />
    </section>
  );
};

export default AboutSection;
