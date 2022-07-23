import * as d3 from "d3";
import { D3Component } from "../types";

export type FamilyNodeProps = { type: "family"; color: string; size: number };
export const FamilyNode: D3Component<FamilyNodeProps, SVGCircleElement> = (
  props
) => {
  const { color, size } = props;
  return d3
    .create("svg:circle" as "circle")
    .datum(props)
    .attr("fill", color)
    .attr("r", size / 2)
    .attr("cx", size / 2)
    .attr("cy", size / 2);
};
