import { cn } from "@/utils";
import { useInView } from "motion/react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import React, { memo, useMemo, useState } from "react";

type TSection = {
  name: string;
  id: string;
  ref: React.RefObject<HTMLDivElement | null>;
};

interface NavigationProps {
  sections: TSection[];
}

const montserrat_italic = Montserrat({
  subsets: ["latin"],
  style: "italic",
  weight: "700",
});

const Navigation = (props: NavigationProps) => {
  const { sections } = props;

  const sectionsInView = sections.map(({ ref }) =>
    useInView(ref, { amount: "some" })
  );
  const sectionIdxInView = useMemo(
    () => sectionsInView.findLastIndex((value) => value),
    [sectionsInView]
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-[5rem] right-[5%] z-50`}>
      <ul className="flex flex-col items-end">
        {sections.map(({ name, id }, idx) => {
          const isInView = idx === sectionIdxInView;
          const show = isInView ? true : isOpen ? true : false;

          return (
            <li
              className={cn([
                "relative flex gap-[1rem] items-center py-[0.25rem] hover:before:w-1 hover:before:h-1 hover:before:bg-(--primary-color)",
                show
                  ? "visible pointer-events-auto"
                  : "invisible pointer-events-none",
              ])}
              key={`nav-${id}`}
              onMouseOver={() => setIsOpen(true)}
              onMouseOut={() => setIsOpen(false)}
            >
              <p className="absolute -right-[1rem] -top-[0.5rem] text-[0.6rem]">{`0${
                idx + 1
              }`}</p>
              <Link
                href={`/#${id}`}
                className={`text-[1.2rem] ${
                  isInView === true ? "text-(--primary-color)" : "text-black"
                } ${montserrat_italic.className}`}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(Navigation);
