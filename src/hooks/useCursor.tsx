import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef } from "react";
import { cursorTextAtom, cursorTypeAtom } from "@/atoms/cursorAtom";
import { Position } from "@/types/common";
import { checkIsMobile } from "@/utils/checkIsMobile";
import { useAnimationFrame, useMotionValue, useSpring } from "motion/react";

type Size = { w: number; h: number };

const useCursor = () => {
  const [type, setType] = useAtom(cursorTypeAtom);
  const text = useAtomValue(cursorTextAtom);
  
  const cursorElementRef = useRef<HTMLDivElement>(null); // cursor element
  const sizeRef = useRef<Size>({ w: 0, h: 0 });
  const positionRef = useRef<Position>({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x);
  const sy = useSpring(y);

  const measure = () => {
    const rect = cursorElementRef.current?.getBoundingClientRect();
    sizeRef.current = { w: rect?.width ?? 0, h: rect?.height ?? 0 };
  };

  useEffect(() => {
    measure(); // 커서의 타입, 내부 텍스트가 바뀔 때 사이즈 측정
  }, [type, text]);

  useEffect(() => {
    const eventHandler = (e: MouseEvent) => {
      if (checkIsMobile()) {
        return;
      }

      setType((type) => (type === "none" ? "default" : type));

      const { w, h } = sizeRef.current;
      positionRef.current = {
        x: e.clientX - w / 2,
        y: e.clientY - h / 2,
      };
    };

    window.addEventListener("mousemove", eventHandler);

    return () => {
      window.removeEventListener("mousemove", eventHandler);
    };
  }, [setType]);

  useAnimationFrame(() => {
    x.set(positionRef.current.x);
    y.set(positionRef.current.y);
  });

  return {
    ref: cursorElementRef,
    x: sx,
    y: sy,
    type,
    text,
  };
};

export default useCursor;
