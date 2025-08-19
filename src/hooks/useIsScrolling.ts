"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

const useIsScrolling = (delay = 1000) => {
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, "change", () => {
    setIsScrolling(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, delay);
  });

  return isScrolling;
};

export default useIsScrolling;
