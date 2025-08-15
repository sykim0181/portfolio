import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";
import { cursorTextAtom, cursorTypeAtom } from "@/atoms/cursorAtom";
import { Position } from "@/types/common";
import { checkIsMobile } from "@/utils/checkIsMobile";

type Size = { w: number; h: number };

const useCursor = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [type, setType] = useAtom(cursorTypeAtom);
  const text = useAtomValue(cursorTextAtom);
  const cursorElementRef = useRef<HTMLDivElement>(null); // cursor element
  const sizeRef = useRef<Size>({ w: 0, h: 0 });

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
      setPosition({
        x: e.clientX - w / 2,
        y: e.clientY - h / 2,
      });
    };

    window.addEventListener("mousemove", eventHandler);

    return () => {
      window.removeEventListener("mousemove", eventHandler);
    };
  }, [setType, setPosition]);

  return {
    ref: cursorElementRef,
    x: position?.x,
    y: position?.y,
    type,
    text,
  };
};

export default useCursor;
