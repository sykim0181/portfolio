import { motion } from "motion/react";
import { FaStarOfLife } from "react-icons/fa6";
import { appearMotionProps } from "@/constants/motion";
import Memoticon from "./Memoticon";

const AboutMe = () => {
  return (
    <motion.section
      id="about_me"
      className="flex flex-col lg:flex-row items-center lg:justify-between"
      {...appearMotionProps}
    >
      <Memoticon className="w-6/10 xs:w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] xs:my-0 xs:mx-auto" />

      <div className="flex flex-col gap-[1.5rem] mt-[2rem] md:justify-center">
        <div>
          <div className="flex gap-[0.5rem] items-center mb-[1rem]">
            <FaStarOfLife color="#f68eab" />
            <p className="font-bold text-[1rem] xs:text-[1.2rem]">
              끈기와 성실함이 무기인 개발자
            </p>
          </div>

          <p className="text-[0.9rem] xs:text-[1rem]">
            주어진 문제를 끈질기게 파고들어 해결합니다.
            <br />
            모든 과제에 최선을 다하는 태도로 빠른 적응과 성장을 이루어 냅니다.
          </p>
        </div>

        <div>
          <div className="flex gap-[0.5rem] items-center mb-[1rem]">
            <FaStarOfLife color="#f68eab" />
            <p className="font-bold text-[1rem] xs:text-[1.2rem]">
              성장을 위한 지속적 학습자
            </p>
          </div>

          <p className="text-[0.9rem] xs:text-[1rem]">
            새로운 기술에 도전하고 학습하며, 꾸준히 더 나은 개발자로
            성장하겠습니다.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
