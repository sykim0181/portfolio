"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface ProjectImageSwiperProps {
  images: string[];
}

const ProjectImageSwiper = ({ images }: ProjectImageSwiperProps) => {
  return (
    <Swiper
      className="w-full h-[200px] xs:flex-1 xs:h-[300px]"
      pagination
      modules={[Pagination]}
    >
      {images.map((imageSrc, i) => (
        <SwiperSlide key={`image-slide-${i}`}>
          <img src={imageSrc} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectImageSwiper;
