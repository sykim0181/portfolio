import { cn } from "@/utils/cn";
import { useAnimate } from "motion/react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import React, { memo, useLayoutEffect, useRef, useState } from "react";

type TSection = {
  name: string;
  id: string;
};

interface NavigationProps {
  sections: TSection[];
  activeSectionId: string | null;
}

const montserrat_italic = Montserrat({
  subsets: ["latin"],
  style: "italic",
  weight: "700",
});

const Navigation = ({ sections, activeSectionId }: NavigationProps) => {
  const navRefs = useRef<Record<string, HTMLLIElement>>({});

  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  useLayoutEffect(() => {
    if (isOpen) {
      animate(scope.current, { y: 0 });
    } else {
      if (activeSectionId === null) {
        return;
      }
      const activeNav = navRefs.current[activeSectionId];
      const activeNavOffset = activeNav?.offsetTop ?? 0;
      animate(scope.current, { y: -activeNavOffset });
    }
  }, [activeSectionId, isOpen, navRefs]);

  return (
    <nav className={`fixed top-[5rem] right-[5%] z-50`}>
      <ul ref={scope} className="flex flex-col items-end">
        {sections.map(({ name, id }, idx) => {
          const isInView = id === activeSectionId;
          const show = isInView ? true : isOpen ? true : false;

          return (
            <li
              ref={(node: HTMLLIElement) => {
                navRefs.current[id] = node;
              }}
              className={cn([
                "relative flex gap-[1rem] items-center py-[0.25rem] hover:before:w-1 hover:before:h-1 hover:before:bg-(--primary-color)",
                show
                  ? "visible pointer-events-auto"
                  : "invisible pointer-events-none",
              ])}
              key={id}
              onMouseOver={() => setIsOpen(true)}
              onMouseOut={() => setIsOpen(false)}
            >
              <p className="absolute -right-[1rem] -top-[0.5rem] text-[0.6rem] text-gray-500">{`0${
                idx + 1
              }`}</p>
              <Link
                href={`/#${id}`}
                className={`text-[1.2rem] ${
                  isInView === true ? "text-(--primary-color)" : "text-gray-500"
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
