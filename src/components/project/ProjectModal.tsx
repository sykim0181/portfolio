"use client";

import { motion } from "motion/react";

interface ProjectModalProps {
  children: React.ReactNode;
}

const ProjectModal = (props: ProjectModalProps) => {
  const { children } = props;

  return (
    <motion.div
      id="modal-project"
      className="w-full h-[calc(100%-30px)] overflow-y-scroll absolute bottom-0 bg-white"
      initial={{ translateY: "100%" }}
      animate={{
        translateY: 0,
      }}
      exit={{ translateY: "100%" }}
      transition={{
        type: "spring",
        bounce: 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ProjectModal;
