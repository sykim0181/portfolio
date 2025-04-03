import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import {
  cursorPositionAtom,
  cursorTextAtom,
  CursorType,
  cursorTypeAtom,
} from "@/atoms/cursorAtom";
import { Position } from "@/types/common";
import { checkIsMobile } from "@/utils";

const delay = 100;

type TCursor = {
  type: CursorType;
  position: Position | null;
  text: string;
};

const useCursor = () => {
  const [type, setType] = useState<CursorType>("none");
  const [text, setText] = useState<string>("");
  const [position, setPosition] = useState<Position | null>(null);

  const [cursorPosition, setCursorPosition] = useAtom(cursorPositionAtom);
  const [cursorType, setCursorType] = useAtom(cursorTypeAtom);
  const [cursorText, setCursorText] = useAtom(cursorTextAtom);
  const ref = useRef<HTMLDivElement>(null); // cursor element

  const cursor = useRef<TCursor>({
    type,
    text,
    position,
  });

  const throttle = useRef<boolean>(false);

  useEffect(() => {
    cursor.current = {
      type,
      text,
      position,
    };
  }, [type, text, position]);

  useEffect(() => {
    const eventHandler = (e: MouseEvent) => {
      if (checkIsMobile()) {
        return;
      }

      if (throttle.current) {
        return;
      }

      throttle.current = true;
      setTimeout(() => {
        const width = ref.current?.getBoundingClientRect().width ?? 0;
        const height = ref.current?.getBoundingClientRect().height ?? 0;
        setCursorPosition({
          x: e.clientX - width / 2,
          y: e.clientY - height / 2,
        });
        throttle.current = false;
      }, 100);
    };

    window.addEventListener("mousemove", eventHandler);

    return () => {
      window.removeEventListener("mousemove", eventHandler);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setType(cursorType);
      setText(cursorText);
      setPosition(cursorPosition);
    }, delay);
  }, [cursorType, cursorText, cursorPosition]);

  return {
    ref,
    x: cursorPosition?.x,
    y: cursorPosition?.y,
    type,
    text,
  };
};

export default useCursor;
