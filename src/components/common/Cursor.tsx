"use client";

import { useMemo } from "react";
import { motion, MotionStyle, Variants } from "motion/react";
import useCursor from "@/hooks/useCursor";

const Cursor = () => {
  const { x, y, ref, type, text } = useCursor();

  const variant = x === undefined || y === undefined ? "none" : type;

  const style: MotionStyle = useMemo(() => {
    switch (type) {
      case "none": {
        return {
          width: 0,
          height: 0,
        };
      }
      case "default": {
        return {
          width: "3rem",
          height: "3rem",
        };
      }
      default: {
        return {
          width: "fit-content",
          height: "fit-content",
        };
      }
    }
  }, [type]);

  const variants: Variants = {
    none: {
      opacity: 0,
      x,
      y,
    },
    default: {
      opacity: 0.5,
      borderRadius: "50%",
      transition: {
        borderRadius: { ease: [0, 20, 60, 100] },
      },
      x,
      y,
    },
    project: {
      opacity: 1,
      backgroundColor: "rgb(0,0,0)",
      color: "rgb(255,255,255)",
      padding: "1rem 2rem",
      borderRadius: "2.5rem",
      transition: {
        borderRadius: { ease: [0, 20, 60, 100] },
      },
      x,
      y,
    },
  };

  return (
    <div
      id="container-cursor"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-100"
    >
      <motion.div
        ref={ref}
        className="bg-(--primary-color) box-border pointer-events-none"
        variants={variants}
        animate={variant}
        style={style}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default Cursor;
