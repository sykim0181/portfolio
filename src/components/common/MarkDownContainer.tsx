import { cn } from "@/utils/cn";
import ReactMarkDown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

interface MarkDownContainerProps {
  text: string;
}

const MarkDownContainer = ({ text }: MarkDownContainerProps) => {
  return (
    <ReactMarkDown
      children={text}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ className, children, ref, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              PreTag="div"
              {...props}
              style={materialLight}
            />
          ) : (
            <code
              className={cn([
                className,
                "bg-gray-100 rounded-[.4rem] px-[0.5rem] py-[0.2rem]",
              ])}
              {...props}
            >
              {children}
            </code>
          );
        },
        a: ({ children, href }) => (
          <a className="!underline" href={href} target="_blank">
            {children}
          </a>
        ),
      }}
    />
  );
};

export default MarkDownContainer;
