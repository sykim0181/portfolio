"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import FullScreenImageSwiper from "./FullScreenImageSwiper";

interface ProjectImageSwiperProps {
  images: string[];
}

const ProjectImageSwiper = ({ images }: ProjectImageSwiperProps) => {
  const [showFullScreen, setShowFullScreen] = useState(false);

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
              onClick={() => setShowFullScreen(true)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {showFullScreen && (
        <FullScreenImageSwiper
          images={images}
          onClick={() => setShowFullScreen(false)}
        />
      )}
    </>
  );
};

export default ProjectImageSwiper;
