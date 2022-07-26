import { D3Component } from "./index";

export type TestListProps = {
  color: string;
  elements: string[];
  elementWrapper?: typeof TestElement;
};

export const TestList: D3Component<HTMLUListElement, TestListProps> = (
  selection
) => {
  const props = selection.datum();

  const list = selection
    .selectAll("ul")
    .data([props])
    .join("ul")
    .style("color", props.color);

  if (props.elementWrapper) {
    const element = list
      .selectAll("li")
      .data(props.elements.map((element) => ({ value: element })))
      .join("li");

    element.call((data) =>
      props.elementWrapper?.(data as Parameters<typeof TestElement>[0])
    );
  } else {
    list
      .selectAll("li")
      .data(props.elements)
      .join("li")
      .text((element) => element);
  }

  return selection;
};

export type TestElementProps = {
  value: string;
};

export const TestElement: D3Component<HTMLLIElement, TestElementProps> = (
  selection
) =>
  selection
    .text((props) => `Value: ${props.value}`)
    .style("font-weight", "bold");
