"use client";

import { useState } from "react";

interface ProjectImageProps {
  src: string;
}

const ProjectImage = (props: ProjectImageProps) => {
  const { src } = props;

  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <div className="w-full h-[200px] xs:flex-1 xs:h-[300px]">
        <img
          src={src}
          onClick={() => setShowImage(true)}
          className="w-full h-full object-contain cursor-pointer"
        />
      </div>

      <div
        className={`w-dvw h-dvh fixed top-0 left-0 bg-[rgba(235,235,235,0.5)] cursor-pointer z-10 ${
          showImage ? "flex" : "hidden"
        }`}
        onClick={() => setShowImage(false)}
      >
        <img src={src} className="max-w-full object-contain" />
      </div>
    </>
  );
};

export default ProjectImage;
