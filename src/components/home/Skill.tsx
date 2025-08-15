"use client";

import { Montserrat } from "next/font/google";
import { motion } from "motion/react";
import { appearMotionProps } from "@/constants/motion";
import { SKILL_DATA } from "@/data/skill";
import SkillItem from "./SkillItem";

const montserrat_bold = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const Skill = () => {
  return (
    <motion.section
      className="flex flex-col gap-[1rem] items-center"
      {...appearMotionProps}
    >
      <h3 className={`text-[2.5rem] text-center ${montserrat_bold.className}`}>
        Skill
      </h3>
      <p className="text-[1rem] xs:text-[1.2rem] text-center">
        아래의 기술을 사용해본 경험이 있습니다.
      </p>

      <div className="grid gap-[1rem] grid-cols-4 xs:grid-cols-5 md:grid-cols-8 w-fit mt-[1rem]">
        {SKILL_DATA.map((skill) => (
          <SkillItem skill={skill} key={skill.name} />
        ))}
      </div>
    </motion.section>
  );
};

export default Skill;
