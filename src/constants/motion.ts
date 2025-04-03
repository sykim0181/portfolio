import { MotionProps } from "motion/react";

export const appearMotionProps: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    ease: "easeInOut",
    duration: 2,
    y: { duration: 1 },
  },
};
