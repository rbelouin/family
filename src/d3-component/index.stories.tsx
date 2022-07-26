import React, { ComponentProps, useEffect, useState } from "react";
import { Story, ComponentStory } from "@storybook/react";
import toReact from "./toReact";

import { TestList, TestElement } from "./test-components";

const ReactTestList = toReact(TestList, "ul");

export default {
  title: "D3 Component",
  component: ReactTestList,
  argTypes: {
    color: { control: "color" },
  },
};

const Template: ComponentStory<typeof ReactTestList> = (
  props: ComponentProps<typeof ReactTestList>
) => <ReactTestList {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "white",
  elements: ["one", "two", "three"],
};

export const WithSelfUpdatingProps: Story<typeof ReactTestList> = () => {
  const [color, setColor] = useState("white");
  const [elements, setElements] = useState(["one", "two", "three"]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setColor("yellow");
      setElements(elements.concat(["four", "five", "six"]));
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return <ReactTestList color={color} elements={elements} />;
};

export const WithComponentComposition: Story<typeof ReactTestList> = () => {
  return (
    <ReactTestList
      color="white"
      elements={["one", "two", "three"]}
      elementWrapper={TestElement}
    />
  );
};
