import { TSkill } from "@/types/common";
import { useState } from "react";

interface SkillItemProps {
  skill: TSkill;
  size?: number | string;
}

const SkillItem = (props: SkillItemProps) => {
  const { skill, size } = props;

  const [isHover, setIsHover] = useState(false);

  const showName = () => setIsHover(true);
  const hideName = () => setIsHover(false);

  const onTouch = () => setIsHover((prev) => !prev);

  const wh = size ? (typeof size === "number" ? `${size}px` : size) : "3rem";

  return (
    <div className="relative w-[3rem]" style={{ width: wh }}>
      <div
        style={{ height: wh }}
        className="aspect-square bg-white rounded-[10px] shadow-[0px_5px_5px_rgba(0,0,0,0.1)]"
        onMouseEnter={showName}
        onMouseLeave={hideName}
        onTouchStart={onTouch}
      >
        <img
          className="w-full h-full"
          src={skill.src}
          alt={`${skill.name}`}
          loading="lazy"
        />
      </div>

      {isHover && (
        <div className="absolute top-[3rem] left-1/2 transform-[translate(-50%,0)] pointer-events-none bg-black text-white text-[0.8rem] p-[0.5rem] rounded-[10px] whitespace-nowrap z-10">
          {skill.name}
        </div>
      )}
    </div>
  );
};

export default SkillItem;
