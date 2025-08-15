import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";
import { cursorTextAtom, cursorTypeAtom } from "@/atoms/cursorAtom";
import { Position } from "@/types/common";
import { checkIsMobile } from "@/utils/checkIsMobile";

const useCursor = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [type, setType] = useAtom(cursorTypeAtom);
  const text = useAtomValue(cursorTextAtom);
  const cursorElementRef = useRef<HTMLDivElement>(null); // cursor element

  useEffect(() => {
    const eventHandler = (e: MouseEvent) => {
      if (checkIsMobile()) {
        return;
      }

      setType((type) => (type === "none" ? "default" : type));

      const width =
        cursorElementRef.current?.getBoundingClientRect().width ?? 0;
      const height =
        cursorElementRef.current?.getBoundingClientRect().height ?? 0;
      setPosition({
        x: e.clientX - width / 2,
        y: e.clientY - height / 2,
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
