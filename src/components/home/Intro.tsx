"use client";

import { useMemo, useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
  useAnimate,
  useMotionTemplate,
} from "motion/react";
import { sbAggroB } from "@/fonts/fonts";
import EmojiFace from "./EmojiFace";

const Intro = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.25, 0.8], [1, 0]);

  return (
    <div ref={ref} className="w-full h-[300dvh]">
      <div className="w-full h-dvh sticky top-0 overflow-hidden">
        <motion.div
          style={{ opacity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[min(80vw,80vh)] h-[min(80vw,80vh)] bg-(--primary-color) blur-2xl"
        />
        <IntroContent scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
};

const IntroContent = ({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const [scope, animate] = useAnimate();
  const isHidden = useRef(false);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value >= 0.75 && !isHidden.current) {
      animate(scope.current, { opacity: 0 });
      isHidden.current = true;
    } else if (value < 0.75 && isHidden.current) {
      animate(scope.current, { opacity: 1 });
      isHidden.current = false;
    }
  });

  const bgXpercent = useTransform(scrollYProgress, [0.25, 0.8], [0, 100]);
  const backgroundPosition = useMotionTemplate` ${bgXpercent}% 0`;

  return (
    <motion.div ref={scope} className="w-full h-full relative">
      <div
        className={`${sbAggroB.className} absolute left-1/2 top-1/4 transform -translate-x-1/2 text-[#575654]`}
      >
        <div className="text-[min(10dvw,50dvh)] text-center leading-none">
          <ScatterLine
            text="FRONTEND"
            scrollYProgress={scrollYProgress}
            lineSpread={180}
            letterStep={100}
          />
          <ScatterLine
            text="DEVELOPER"
            scrollYProgress={scrollYProgress}
            lineSpread={150}
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <EmojiFace />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute left-1/2 bottom-1/5 transform -translate-x-1/2 -translate-y-1/2 text-lg md:text-2xl font-bold text-center text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-(--bg-color) via-[#ddcab6] to-(--bg-color) bg-size-[200%_200%]"
        style={{ backgroundPosition }}
      >
        프론트엔드 개발자 김소연의 포트폴리오
      </motion.span>
    </motion.div>
  );
};

const ScatterLine = ({
  text,
  scrollYProgress,
  lineSpread = 120,
  letterStep = 100,
  direction = "up",
}: {
  text: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  lineSpread?: number; // 줄의 위/아래 이동량(바깥쪽)
  letterStep?: number; // 글자 좌우 이동 간격(바깥쪽)
  direction?: "up" | "down";
}) => {
  const letters = useMemo(() => text.split(""), [text]);
  const mid = (letters.length - 1) / 2;

  const lineY = useTransform(
    scrollYProgress,
    [0.25, 0.8],
    [direction === "up" ? -lineSpread : lineSpread, 0]
  );
  const opacity = useTransform(scrollYProgress, [0.25, 0.8], [0.5, 1]);

  return (
    <motion.div
      style={{ y: lineY }}
      className="flex items-center justify-center"
      aria-label={text}
    >
      {letters.map((ch, i) => {
        const offsetIndex = i - mid; // 음수=왼쪽, 양수=오른쪽
        const dxTarget =
          Math.sign(offsetIndex) * Math.abs(offsetIndex) * letterStep;

        const x = useTransform(scrollYProgress, [0.25, 1], [dxTarget, 0]);

        return (
          <motion.span
            key={`${ch}-${i}`}
            className="inline-block will-change-transform"
            style={{ x, opacity }}
          >
            {ch}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default Intro;
