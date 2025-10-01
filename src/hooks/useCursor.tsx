import { useAtomValue } from "jotai";
import { useEffect, useRef } from "react";
import { cursorTextAtom, cursorTypeAtom } from "@/atoms/cursorAtom";
import { Position } from "@/types/common";
import { useAnimationFrame, useMotionValue, useSpring } from "motion/react";

type Size = { w: number; h: number };

const useCursor = () => {
  const type = useAtomValue(cursorTypeAtom);
  const text = useAtomValue(cursorTextAtom);

  const cursorElementRef = useRef<HTMLDivElement>(null); // cursor element
  const sizeRef = useRef<Size>({ w: 0, h: 0 });
  const positionRef = useRef<Position>({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x);
  const sy = useSpring(y);

  useEffect(() => {
    // 커서의 타입, 내부 텍스트가 바뀔 때 사이즈 측정
    const rect = cursorElementRef.current?.getBoundingClientRect();
    sizeRef.current = { w: rect?.width ?? 0, h: rect?.height ?? 0 };
  }, [type, text, cursorElementRef, sizeRef]);

  useEffect(() => {
    const root = document.getElementById("root");

    const eventHandler = (e: MouseEvent) => {
      const { w, h } = sizeRef.current;
      positionRef.current = {
        x: e.clientX - w / 2,
        y: e.clientY - h / 2,
      };
    };

    root?.addEventListener("pointermove", eventHandler);

    return () => {
      root?.removeEventListener("pointermove", eventHandler);
    };
  }, [sizeRef, positionRef]);

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
