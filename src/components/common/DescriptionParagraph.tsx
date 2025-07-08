import { Description } from "@/types/common";
import MarkDownContainer from "./MarkDownContainer";
import { cn } from "@/utils/cn";

interface DescriptionParagraphProps {
  description: Description;
}

const DescriptionParagraph = (props: DescriptionParagraphProps) => {
  const { description } = props;

  return (
    <div>
      <div
        className={cn([
          "flex gap-[1rem] relative",
          "before:w-1 before:h-1 before:bg-black before:rounded-full before:relative before:top-[.625rem] before:shrink-0",
        ])}
      >
        <MarkDownContainer text={description.title} />
      </div>
      {description.content && (
        <ul className="flex flex-col gap-[.5rem] mt-[.5rem] pl-[1rem]">
          {description.content.map((dsct, index) => (
            <li
              key={`content(${index})`}
              className={cn([
                "flex gap-[1rem] relative",
                "before:w-1 before:h-1 before:bg-gray-400 before:rounded-full before:relative before:top-[.625rem] before:shrink-0",
              ])}
            >
              <MarkDownContainer text={dsct} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DescriptionParagraph;
