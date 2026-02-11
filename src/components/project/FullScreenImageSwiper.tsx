import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import usePreventScroll from "@/hooks/usePreventScroll";
import { useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface FullScreenImageSwiperProps {
  images: string[];
  className?: string;
  onClick?: () => void;
}

const FullScreenImageSwiper = ({
  images,
  className,
  onClick,
}: FullScreenImageSwiperProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  usePreventScroll();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prevBtn = root.querySelector(".swiper-button-prev");
    const nextBtn = root.querySelector(".swiper-button-next");

    const stopEventPropagation = (e: Event) => e.stopPropagation();

    prevBtn?.addEventListener("click", stopEventPropagation);
    nextBtn?.addEventListener("click", stopEventPropagation);

    return () => {
      prevBtn?.removeEventListener("click", stopEventPropagation);
      nextBtn?.removeEventListener("click", stopEventPropagation);
    };
  }, []);

  return (
    <div
      className="w-dvw h-dvh fixed inset-0 z-10 bg-(--bg-color) cursor-pointer"
      onClick={onClick}
      ref={rootRef}
    >
      <Swiper
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-full"
      >
        {images.map((src, idx) => (
          <div
            className="swiper-zoom-container"
            key={`full-image-container-${idx}`}
          >
            <SwiperSlide key={`full-image-slide-${idx}`}>
              <img
                src={src}
                className="select-none absolute top-1/2 left-1/2 -translate-1/2"
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default FullScreenImageSwiper;
