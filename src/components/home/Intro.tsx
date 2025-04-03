import { IoIosArrowRoundDown } from "react-icons/io";

const Intro = () => {
  return (
    <div id="first" className="sticky top-0 w-full h-dvh bg-white">
      <div className="w-(--default-width) h-full max-w-(--max-width) my-0 mx-auto flex flex-col justify-center align-center">
        <div className="flex-1 flex flex-col justify-center w-full relative">
          <h1 className="text-start text-[15vw] md:text-[min(15vw,8rem)] font-[SBAggroB]">
            Portfolio
          </h1>
          <p className="text-[0.8rem] xs:text-[1.2rem] md:text-[1.5rem]">
            안녕하세요, 프론트엔드 개발자 김소연입니다 :)
          </p>
        </div>
        <div className="flex w-full align-end justify-between py-[2rem]">
          <IoIosArrowRoundDown className="text-[3rem] xs:text-[3.5rem] md:text-[5rem]" />
          <div className="flex flex-col xs:flex-row gap-0 xs:gap-[1rem] items-end xs:items-start text-[0.8rem] xs:text-[1rem] md:text-[1.2rem]">
            <p>By</p>
            <p className="italic">Soyeon Kim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
