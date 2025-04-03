"use client";

import { Montserrat } from "next/font/google";
import { useState } from "react";
import { motion } from "motion/react";
import { appearMotionProps } from "@/constants/motion";
import { skillData, TSkill } from "@/data/skill";

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
        {skillData.map((skill) => (
          <SkillItem skill={skill} key={skill.name} />
        ))}
      </div>
    </motion.section>
  );
};

const SkillItem = ({ skill }: { skill: TSkill }) => {
  const [isHover, setIsHover] = useState(false);

  const showName = () => setIsHover(true);
  const hideName = () => setIsHover(false);

  const onTouch = () => setIsHover((prev) => !prev);

  return (
    <div className="relative w-[3rem]">
      <div
        className="h-[3rem] aspect-square bg-white rounded-[10px] shadow-[0px_5px_5px_rgba(0,0,0,0.1)]"
        onMouseEnter={showName}
        onMouseLeave={hideName}
        onTouchStart={onTouch}
      >
        <img
          className="w-full h-full"
          src={skill.src}
          alt={`${skill.name}`}
          loading="lazy"
        />
      </div>

      {isHover && (
        <div className="absolute top-[3.5rem] left-1/2 transform-[translate(-50%,0)] pointer-events-none bg-black text-white text-[0.8rem] p-[0.5rem] rounded-[10px] whitespace-nowrap z-10">
          {skill.name}
        </div>
      )}
    </div>
  );
};

export default Skill;
