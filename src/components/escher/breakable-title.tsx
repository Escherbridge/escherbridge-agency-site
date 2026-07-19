import { Fragment, createElement } from "react";

type BreakableTitleProps = {
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
  title: string;
};

export function BreakableTitle({ as = "span", className, title }: BreakableTitleProps) {
  const parts = title.split(/(?<=[a-z])(?=[A-Z])/g);
  return createElement(
    as,
    { className },
    parts.map((part, index) => (
      <Fragment key={`${part}-${index}`}>
        {index > 0 ? <wbr /> : null}
        {part}
      </Fragment>
    )),
  );
}
