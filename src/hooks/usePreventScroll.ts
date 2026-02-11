import { useEffect } from "react";

const usePreventScroll = () => {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.offsetWidth;
    document.body.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.removeProperty("--scrollbar-width");
    };
  }, []);
};

export default usePreventScroll;
