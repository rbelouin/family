import * as d3 from "d3";
import { D3Component } from "../types";

export type CircleClipPathProps = { size: number };
export const CircleClipPath: D3Component<CircleClipPathProps, SVGSVGElement> = (
  props
) => {
  const { size } = props;
  const clipPath = d3.create("svg").datum(props);

  clipPath
    .append("defs")
    .append("clipPath")
    .attr("id", "cut-circle")
    .append("circle")
    .attr("shape-rendering", "geometricPrecision")
    .attr("r", size / 2)
    .attr("cx", size / 2)
    .attr("cy", size / 2);

  return clipPath;
};

export const prepareCircleClipPath = (() => {
  let clipPath: SVGSVGElement | undefined;
  return (props: CircleClipPathProps) => {
    if (!clipPath) {
      clipPath = CircleClipPath(props).node() || undefined;
      if (clipPath) {
        document.body.appendChild(clipPath);
      }
    }
  };
})();
