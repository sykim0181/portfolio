import { IoIosArrowDown } from "react-icons/io";
import Memoticon from "./Memoticon";

const Intro = () => {
  return (
    <div id="first" className="sticky top-0 w-full h-dvh bg-white">
      <div className="w-(--default-width) h-full max-w-(--max-width) my-0 mx-auto py-[2rem] flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center gap-[1.5rem]">
          <Memoticon className="w-[100px]" />
          <p className="text-[1.2rem] font-bold">
            안녕하세요, 프론트엔드 개발자 김소연입니다 :)
          </p>
          <p className="text-[3rem] font-bold">Frontend Developer</p>
          <p className="text-center">
            끈기와 성실함을 무기로, 주어진 문제를 집요하게 해결합니다.
            <br />
            사소한 아이디어라도 기술로 만들어내며, 매일 한 걸음씩 성장합니다.{" "}
          </p>
        </div>
        <div className="mx-auto w-fit rounded-full bg-black text-white p-[0.5rem] flex justify-center items-center">
          <IoIosArrowDown className="w-[1.6rem] h-[1.6rem]" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
