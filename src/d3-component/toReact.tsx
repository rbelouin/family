import * as d3 from "d3";
import React, { FC, useEffect, useRef, useState } from "react";
import { D3Component } from "./index";

export function toReact<E extends keyof ElementTagNameMap, P extends {}>(
  component: D3Component<ElementTagNameMap[E], P>,
  tagName: E
): FC<P> {
  return (props: P) => {
    const ref = useRef<HTMLDivElement>(null);
    const [element, setElement] = useState<ElementTagNameMap[E]>();

    useEffect(() => {
      if (ref.current) {
        if (element !== undefined) {
          const selection = d3.select(element).datum(props);
          const node = component(selection).node()!;
          ref.current.appendChild(node);
        } else {
          setElement(d3.create(tagName).node()!);
        }
      }
    }, [ref, element, props]);

    return <div ref={ref} data-testid="react-container"></div>;
  };
}

export default toReact;
