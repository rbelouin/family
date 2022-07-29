import * as d3 from "d3";
import { D3Component } from "../d3-component";

export type CircleClipPathProps = { size: number };
export const CircleClipPath: D3Component<SVGSVGElement, CircleClipPathProps> = (
  selection
) => {
  const props = selection.datum();

  selection
    .selectAll("defs")
    .data([props])
    .join("defs")
    .append("clipPath")
    .attr("id", "cut-circle")
    .append("circle")
    .attr("shape-rendering", "geometricPrecision")
    .attr("r", (props) => props.size / 2)
    .attr("cx", (props) => props.size / 2)
    .attr("cy", (props) => props.size / 2);

  return selection;
};

export const createOrUpdateCircleClipPath = (() => {
  return (props: CircleClipPathProps) => {
    d3.select("body")
      .selectAll("svg.circle-clip-path")
      .data([props])
      .join("svg")
      .classed("circle-clip-path", true)
      .call(CircleClipPath);
  };
})();
