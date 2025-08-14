"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

interface MemoticonProps {
  className?: string;
}

const Memoticon = (props: MemoticonProps) => {
  const { className } = props;

  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  const src = isHover
    ? "/home/memoticon_surprised.png"
    : "/home/memoticon_smiling.png";

  return (
    <div
      className={cn("aspect-square", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.img
        src={src}
        className="w-full h-full object-contain"
        whileHover={{ scale: 1.1 }}
      />
    </div>
  );
};

export default Memoticon;
