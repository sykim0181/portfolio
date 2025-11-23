import { getAppearMotionProps } from "@/utils/motionProps";
import { Transition } from "motion";
import { IconType } from "react-icons";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

interface ItemProps {
  text: string;
  icon: IconType;
  className?: string;
  transition?: Transition;
}

const AboutItem = ({ text, className, icon: Icon, transition }: ItemProps) => {
  const motionProps = getAppearMotionProps(0, 50, 1, transition);

  return (
    <motion.div
      className={cn(
        "w-full aspect-square lg:aspect-auto p-4 lg:p-6 rounded-2xl flex flex-col justify-between lg:gap-8 bg-(--secondary-color) text-white",
        className
      )}
      {...motionProps}
    >
      <Icon className="text-3xl" />
      <span className="md:text-xl text-right text-pretty break-keep">
        {text}
      </span>
    </motion.div>
  );
};

export default AboutItem;
