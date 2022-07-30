import React, { useEffect, useState } from "react";
import { render } from "@testing-library/react";
import { TestList, TestElement } from "./test-components";
import { toReact } from "./toReact";

describe("d3-component", () => {
  describe("toReact", () => {
    it("should create a node with the correct tag", () => {
      const ReactTestList = toReact(TestList, "ul");
      const { getByTestId } = render(
        <ReactTestList color="white" elements={["one", "two", "three"]} />
      );

      const { children } = getByTestId("react-container");
      expect(children).toHaveLength(1);
      expect(children[0]).toBeInstanceOf(HTMLUListElement);
    });

    it("should create a node with the correct data", () => {
      const ReactTestList = toReact(TestList, "ul");
      const { queryByText } = render(
        <ReactTestList color="white" elements={["one", "two", "three"]} />
      );

      const one = queryByText("one");
      expect(one).toBeTruthy();

      const two = queryByText("two");
      expect(two).toBeTruthy();

      const three = queryByText("three");
      expect(three).toBeTruthy();
    });

    it("should not compile if you try to give it an incorrect tag", () => {
      // @ts-expect-error
      // despite my efforts, some incorrect tags still appear to pass the compilation (e.g. div)
      toReact(TestList, "a");
    });

    it("should update the content when the given props change", async () => {
      const ReactTestList = toReact(TestList, "ul");

      const Wrapper = () => {
        const [elements, setElements] = useState(["one", "two", "three"]);

        useEffect(() => {
          setTimeout(() => {
            setElements(["1", "2", "3", "4"]);
          }, 100);
        }, []);

        return <ReactTestList color="white" elements={elements} />;
      };

      const { queryByText, findByText } = render(<Wrapper />);

      // covered by the test above
      const one = queryByText("one");
      const two = queryByText("two");
      const three = queryByText("three");

      expect(queryByText("four")).toBeNull();

      const four = await findByText("4");
      expect(four).toBeTruthy();

      // We expect the old nodes to have been mutated
      expect(queryByText("1")).toBe(one);
      expect(queryByText("2")).toBe(two);
      expect(queryByText("3")).toBe(three);
    });

    it("should work with d3 components composing each other", async () => {
      const ReactTestList = toReact(TestList, "ul");

      const { findByText } = render(
        <ReactTestList
          color="white"
          elements={["one", "two", "three"]}
          elementWrapper={TestElement}
        />
      );

      const one = await findByText("Value: one");
      expect(one).toBeTruthy();
    });
  });
});
