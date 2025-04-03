import { useInView } from "motion/react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import React, { memo, useState } from "react";

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

  const sectionIdxInView = sectionsInView.findLastIndex((value) => value);
  console.log("sectionIdxInView:", sectionIdxInView);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-[5rem] right-[5%] z-50`}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      <ul className="flex flex-col items-end gap-[0.5rem]">
        {sections.map(({ name, id }, idx) => {
          const isInView = idx === sectionIdxInView;
          const show = isInView ? true : isOpen ? true : false;

          return (
            <li
              className={`relative flex gap-[1rem] items-center ${
                show
                  ? "visible pointer-events-auto"
                  : "invisible pointer-events-none"
              } hover:before:w-1 hover:before:h-1 hover:before:bg-(--primary-color)`}
              key={`nav-${id}`}
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
