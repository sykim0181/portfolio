"use client";

import { motion, Variants } from "motion/react";
import { useSetAtom } from "jotai";
import Link from "next/link";
import { cursorTextAtom, cursorTypeAtom } from "@/atoms/cursorAtom";

interface Props {
  id: number;
  imgSrc: string;
  name: string;
}

const ProjectItem = (props: Props) => {
  const { id, imgSrc, name } = props;

  const setCursorType = useSetAtom(cursorTypeAtom);
  const setCursorText = useSetAtom(cursorTextAtom);

  const onMouseMove = () => {
    setCursorType("project");
    setCursorText(name);
  };

  const onMouseLeave = () => {
    setCursorType("default");
    setCursorText("");
  };

  const variants: Variants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="w-full aspect-square rounded-[10px] overflow-hidden shadow-[0px_10px_20px_#9e9e9e] cursor-pointer"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
    >
      <Link href={`/project/${id}`} className="block w-full h-full">
        <motion.img
          src={imgSrc}
          alt={`프로젝트 ${name} 이미지`}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        />
      </Link>
    </motion.div>
  );
};

export default ProjectItem;
