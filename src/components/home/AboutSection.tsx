"use client";

import { memo, useState } from "react";
import { motion } from "motion/react";
import { getAppearMotionProps } from "@/utils/motionProps";
import ProfileModal from "./ProfileModal";
import { partialSans } from "@/fonts";
import {
  MdAllInclusive,
  MdInsights,
  MdOutlineWbIncandescent,
} from "react-icons/md";
import AboutItem from "./AboutItem";

const AboutSection = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const appearMotionProps = getAppearMotionProps();

  return (
    <section className="relative w-full z-1">
      <div className="w-(--default-width) max-w-(--max-width) min-h-dvh mx-auto flex flex-col gap-12 py-12">
        <motion.h1
          className={`text-5xl font-bold text-center ${partialSans.className}`}
          {...appearMotionProps}
        >
          ABOUT ME
        </motion.h1>

        <motion.div
          className="text-lg md:text-xl lg:text-2xl mt-12"
          {...appearMotionProps}
        >
          <div>안녕하세요!</div>
          <div>프론트엔드 개발자 김소연입니다 :)</div>
        </motion.div>

        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4">
          <AboutItem
            icon={MdAllInclusive}
            text={"끈기와 성실함을 무기로, 주어진 문제를 집요하게 해결합니다."}
            className="row-start-1 col-start-2"
            transition={{ delay: 0.2 }}
          ></AboutItem>
          <AboutItem
            icon={MdInsights}
            text={
              "사소한 아이디어라도 직접 시도해보고, 매일 한 걸음씩 성장합니다."
            }
            className="row-start-2 col-start-1"
            transition={{ delay: 0.4 }}
          ></AboutItem>
          <AboutItem
            icon={MdOutlineWbIncandescent}
            text={
              "사용자의 시선에서 고민하며, 더 편리하고 직관적인 경험을 설계합니다."
            }
            className="row-start-2 col-start-2"
            transition={{ delay: 0.6 }}
          ></AboutItem>
        </div>

        <motion.button
          className="bg-(--bg-color) w-fit text-white px-6 py-2 rounded-2xl mx-auto"
          onClick={() => setShowProfileModal(true)}
          {...appearMotionProps}
        >
          프로필 보기
        </motion.button>

        {showProfileModal && (
          <ProfileModal onCloseModal={() => setShowProfileModal(false)} />
        )}
      </div>
    </section>
  );
};

export default memo(AboutSection);
