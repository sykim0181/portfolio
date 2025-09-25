import { Transition } from "motion";
import { MotionProps } from "motion/react";

export function getAppearMotionProps(
  initialX = 0,
  initialY = 0,
  duration = 1,
  transition?: Transition
): MotionProps {
  return {
    initial: { opacity: 0, x: initialX, y: initialY },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: {
      ease: "easeInOut",
      duration,
      ...transition,
    },
  };
}
