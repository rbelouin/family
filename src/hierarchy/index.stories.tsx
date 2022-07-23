import React, { useEffect, useRef } from "react";
import { D3Component } from "../types";
import { Hierarchy } from "./index";

function toReact<P extends {}>(component: D3Component<P>): React.FC<P> {
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

const ReactHierarchy = toReact(Hierarchy);

export default {
  title: "Hierarchy",
  component: ReactHierarchy,
};

export const WithoutForces = () => (
  <ReactHierarchy
    width={1000}
    height={800}
    distance={30}
    forcesEnabled={false}
  />
);

export const WithForces = () => (
  <ReactHierarchy
    width={1000}
    height={800}
    distance={30}
    forcesEnabled={true}
  />
);
