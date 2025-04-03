import { Description } from "@/types/common";

interface DescriptionParagraphProps {
  description: Description;
}

const DescriptionParagraph = (props: DescriptionParagraphProps) => {
  const { description } = props;

  return (
    <div className="flex flex-col gap-[0.5rem]">
      <div className="flex gap-[1rem]">
        <p>•</p>
        <p>{description.title}</p>
      </div>

      {description.content && (
        <div className="flex flex-col gap-[0.5rem] ml-[1rem]">
          {description.content.map((dsct, index) => (
            <div key={`content(${index})`} className="flex gap-[1rem]">
              <p>◦</p>
              <p>{dsct}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DescriptionParagraph;
