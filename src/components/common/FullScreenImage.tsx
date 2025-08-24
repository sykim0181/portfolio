import { cn } from "@/utils/cn";

interface FullScreenImageProps {
  src: string;
  className?: string;
  onClick?: () => void;
}

const FullScreenImage = ({ src, className, onClick }: FullScreenImageProps) => {
  return (
    <div
      className={cn([
        "w-dvw h-dvh fixed top-0 left-0 bg-[rgba(235,235,235,0.5)] cursor-pointer z-10",
        className,
      ])}
      onClick={onClick}
    >
      <img
        src={src}
        className="max-w-full max-h-full object-contain absolute top-1/2 left-1/2 -translate-1/2"
      />
    </div>
  );
};

export default FullScreenImage;
