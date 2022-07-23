import React, { FC, useEffect, useRef } from "react";
import { D3Component } from "../types";

export function toReact<P extends {}>(component: D3Component<P>): FC<P> {
  return (props) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (ref.current) {
        const element = component(props).node();
        if (element) {
          ref.current.appendChild(element);
        }
      }
    }, [ref]);
    return <div ref={ref}></div>;
  };
}

export function toReactSVG<P extends {}>(
  component: D3Component<P>,
  viewBox?: string
): FC<P> {
  return (props) => {
    const ref = useRef<SVGSVGElement>(null);
    useEffect(() => {
      if (ref.current) {
        const element = component(props).node();
        if (element) {
          ref.current.appendChild(element);
        }
      }
    }, [ref]);
    return <svg viewBox={viewBox} ref={ref}></svg>;
  };
}
