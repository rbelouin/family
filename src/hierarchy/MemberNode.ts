import * as d3 from "d3";
import { D3Component } from "../types";
import { prepareCircleClipPath } from "./CircleClipPath";

export type MemberNodeProps = {
  type: "member";
  color: string;
  backgroundColor: string;
  size: number;
  name: string;
  picture?: string;
};

export const MemberNode: D3Component<MemberNodeProps, SVGGElement> = (
  props
) => {
  const { color, backgroundColor, size, name, picture } = props;

  prepareCircleClipPath({ size });

  const group = d3
    .create("svg:g" as "g")
    .datum(props)
    .attr("clip-path", "url(#cut-circle)");

  group
    .append("circle")
    .attr("r", size / 2)
    .attr("cx", size / 2)
    .attr("cy", size / 2)
    .attr("fill", backgroundColor)
    .attr("shape-rendering", "geometricPrecision");

  if (picture) {
    group
      .append("image")
      .attr("href", picture)
      .attr("height", size)
      .attr("width", size);
  }

  group
    .append("circle")
    .attr("r", size / 2)
    .attr("cx", size / 2)
    .attr("cy", size / 2)
    .attr("fill", "transparent")
    .attr("stroke-width", 1.5)
    .attr("stroke", color)
    .attr("shape-rendering", "geometricPrecision");

  group.append("title").text(name);

  return group;
};
