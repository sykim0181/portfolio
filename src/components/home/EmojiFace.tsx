"use client";

import { useState } from "react";
import { motion } from "motion/react";
import useIsScrolling from "@/hooks/useIsScrolling";

const EmojiFace = () => {
  const isScrolling = useIsScrolling(500);

  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => {
    if (isScrolling) return;
    setIsHover(false);
  };

  const src =
    isScrolling || isHover
      ? "/home/memoticon_surprised.webp"
      : "/home/memoticon_smiling.webp";

  return (
    <div
      className="aspect-square w-[200px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.img
        src={src}
        fetchPriority="high"
        className="w-full h-full object-contain"
        whileHover={{ scale: 1.1 }}
      />
    </div>
  );
};

export default EmojiFace;
