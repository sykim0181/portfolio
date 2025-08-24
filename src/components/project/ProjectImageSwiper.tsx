"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import FullScreenImage from "../common/FullScreenImage";

interface ProjectImageSwiperProps {
  images: string[];
}

const ProjectImageSwiper = ({ images }: ProjectImageSwiperProps) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  return (
    <>
      <Swiper
        className="w-full h-[200px] xs:flex-1 xs:h-[300px]"
        pagination
        modules={[Pagination]}
      >
        {images.map((imageSrc, i) => (
          <SwiperSlide key={`image-slide-${i}`}>
            <img
              src={imageSrc}
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => setActiveIndex(i)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {activeIndex !== undefined && (
        <FullScreenImage
          src={images[activeIndex]}
          onClick={() => setActiveIndex(undefined)}
        />
      )}
    </>
  );
};

export default ProjectImageSwiper;
