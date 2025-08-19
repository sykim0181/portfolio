import { cn } from "@/utils/cn";
import Image from "next/image";
import { motion } from "motion/react";
import { appearMotionProps } from "@/constants/motion";

const NewProfile = () => {
  return (
    <div className="w-(--default-width) max-w-(--max-width) min-h-dvh mx-auto flex flex-col py-4">
      <motion.h1
        className="text-5xl font-bold text-center font-[PartialSansKR-Regular]"
        {...appearMotionProps}
      >
        ABOUT ME
      </motion.h1>
      <motion.div className="text-2xl mt-12" {...appearMotionProps}>
        <div>안녕하세요!</div>
        <div>프론트엔드 개발자 김소연입니다 :)</div>
      </motion.div>
      <div className="flex flex-col gap-4 relative mt-8">
        <motion.div {...appearMotionProps}>
          <p className="font-bold">
            끈기와 성실함을 무기로, 주어진 문제를 집요하게 해결합니다.
          </p>
          <p>
            어려운 문제도 끝까지 물고 늘어지며, 단순히 작동하는 수준을 넘어
            안정적인 결과를 만들어냅니다.
          </p>
        </motion.div>
        <motion.div {...appearMotionProps}>
          <p className="font-bold">
            사소한 아이디어라도 직접 시도해보고, 매일 한 걸음씩 성장합니다.
          </p>
          <p>
            작은 실험을 빠르게 돌리고 배운 점을 기록·공유해 지속 가능한 개선을
            만듭니다.
          </p>
        </motion.div>
        <motion.div {...appearMotionProps}>
          <p className="font-bold">
            사용자의 시선에서 고민하며, 더 편리하고 직관적인 경험을 설계합니다.
          </p>
          <p>
            기능 구현을 넘어, 사용자가 불편을 느끼지 않고 자연스럽게 몰입할 수
            있는 서비스를 만드는 것을 목표로 합니다.
          </p>
        </motion.div>

        {/* <div className="absolute w-full h-full grid grid-cols-6 grid-rows-4"></div> */}
      </div>
      <motion.button
        className="bg-(--bg-color) w-fit text-white px-6 py-2 rounded-2xl mx-auto mt-12"
        {...appearMotionProps}
      >
        프로필 보기
      </motion.button>
    </div>
  );

  // return (
  //   <div className="w-full h-dvh relative">
  //     <div className="w-full h-dvh flex justify-between">
  //       <div className="flex-1 md:flex-none grid grid-rows-3 md:grid-cols-2">
  //         <div className="w-full flex justify-start">
  //           <ProfileImage src="/home/profile-img/1.jpg" />
  //         </div>
  //         <div className="w-full flex justify-end md:row-start-2 md:col-start-2">
  //           <ProfileImage src="/home/profile-img/2.jpg" />
  //         </div>
  //         <div className="w-full flex justify-start md:row-start-3 md:col-start-1">
  //           <ProfileImage src="/home/profile-img/3.jpg" className="" />
  //         </div>
  //       </div>

  //       <div className="flex-1 md:flex-none grid grid-rows-3 md:grid-cols-2">
  //         <div className="w-full flex justify-end md:col-start-2">
  //           <ProfileImage src="/home/profile-img/4.jpg" />
  //         </div>
  //         <div className="w-full flex justify-start md:row-start-2 md:col-start-1">
  //           <ProfileImage src="/home/profile-img/5.jpg" />
  //         </div>
  //         <div className="w-full flex justify-end md:row-start-3 md:col-start-2">
  //           <ProfileImage src="/home/profile-img/6.jpg" />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference">
  //       {/* 소개 문구 */}
  //     </div>
  //   </div>
  // );
};

// const ProfileImage = ({
//   src,
//   className,
// }: {
//   src: string;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         "h-full aspect-square overflow-hidden relative rounded-full",
//         className
//       )}
//     >
//       <Image src={src} alt="이미지" fill />
//     </div>
//   );
// };

export default NewProfile;
