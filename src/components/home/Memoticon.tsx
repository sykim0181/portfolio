"use client";

import { useState } from "react";
import { motion } from "motion/react";

const Memoticon = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  const src = isHover
    ? "/home/memoticon_surprised.png"
    : "/home/memoticon_smiling.png";

  return (
    <div
      className="aspect-square w-6/10 xs:w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] xs:my-0 xs:mx-auto"
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
