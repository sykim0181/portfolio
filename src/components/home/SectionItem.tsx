import { useInView } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

interface SectionItemProps {
  id: string;
  onChange: (id: string, inView: boolean) => void;
  children: ReactNode;
}

const SectionItem = ({ id, onChange, children }: SectionItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: "some" });

  useEffect(() => {
    onChange(id, inView);
  }, [id, inView]);

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
};

export default SectionItem;
