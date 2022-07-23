import React, { FC, useEffect, useRef } from "react";
import { D3Component } from "../types";

export function toReact<P extends {}>(component: D3Component<P>): FC<P> {
  return (props) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (ref.current) {
        const svgNode = component(props);
        if (svgNode) {
          ref.current.appendChild(svgNode);
        }
      }
    }, [ref]);
    return <div ref={ref}></div>;
  };
}
