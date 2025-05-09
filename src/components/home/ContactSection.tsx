"use client";

import { motion } from "motion/react";

interface ContactSectionProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const ContactSection = ({ ref }: ContactSectionProps) => {
  const Message = Array.from("Thank You").map((char, index) => (
    <motion.span
      key={`message-${index}`}
      className="h-fit"
      initial={{
        translateY: "100%",
        rotateX: "-80deg",
        opacity: 0,
      }}
      whileInView={{
        translateY: "0",
        rotateX: "0deg",
        opacity: 1,
      }}
      transition={{
        delay: 0.1 * index,
        duration: 0.5,
      }}
    >
      {char}
    </motion.span>
  ));

  const socialLinkStyle =
    "relative after:block after:absolute after:h-[1px] after:w-[0] after:transition-[width] after:duration-500 hover:after:w-full hover:after:bg-black";

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full h-dvh bg-(--bg-color) z-1"
    >
      <div className="w-(--default-width) max-w-(--max-width) h-full grid grid-row-3 mx-auto">
        <div className="row-start-2 row-end-3 flex justify-center items-center text-white font-[PartialSansKR-Regular] text-[min(10vw,8rem)] text-center]">
          {Message}
        </div>
        <div className="row-start-3 row-end-4 flex flex-col gap-[0.5rem] justify-start items-center">
          <p>soyeon364@naver.com</p>
          <div className="flex gap-[1rem]">
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
          </div>
          <p className="text-[#aeaeae] text-[0.8rem]">©2025 KimSoyeon</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
