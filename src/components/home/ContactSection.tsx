"use client";

import { memo } from "react";
import DroppingBalls from "./DroppingBalls";
import { partialSans } from "@/fonts";
import { useSetAtom } from "jotai";
import { cursorTypeAtom } from "@/atoms/cursorAtom";

const ContactSection = () => {
  const setCursorType = useSetAtom(cursorTypeAtom);

  const socialLinkStyle =
    "relative w-fit after:block after:absolute after:h-[1px] after:w-[0] after:transition-[width] after:duration-500 hover:after:w-full hover:after:bg-black";

  return (
    <div
      className="relative w-full h-[100dvh] z-1"
      onMouseEnter={() => setCursorType("none")}
      onMouseLeave={() => setCursorType("default")}
    >
      <DroppingBalls backgroundColor="#DEE5ED" ballColor="#FFFBF0" />
      <p
        className={`absolute top-8 left-8 ${partialSans.className} text-[min(10vw,8rem)] text-[#6C6C5A] w-fit pointer-events-none`}
      >
        Thank
        <br />
        You
      </p>
      <div className="absolute left-8 bottom-12 flex flex-col gap-4 text-[#6C6C5A]">
        <a
          href="https://github.com/sykim0181"
          target="_blank"
          className={socialLinkStyle}
        >
          Github
        </a>
        <a
          href="https://sy-it.tistory.com/"
          target="_blank"
          className={socialLinkStyle}
        >
          Blog
        </a>
        <p>soyeon364@naver.com</p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6C6C5A]">
        <p className="text-sm w-fit mx-auto">©2025 KimSoyeon</p>
      </div>
    </div>
  );
};

export default memo(ContactSection);
