import { Fragment, JSX } from "react";

export function textToJSXWithBreaks(text: string): JSX.Element[] {
  const textArr = text.split("\\n");
  console.log(textArr);
  return textArr.map((line, index) => (
    <Fragment key={index}>
      {line}
      {index !== textArr.length - 1 && <br />}
    </Fragment>
  ));
}
