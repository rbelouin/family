import { D3Component } from "../d3-component";
import { createOrUpdateCircleClipPath } from "./CircleClipPath";

export type MemberNodeProps = {
  type: "member";
  color: string;
  backgroundColor: string;
  size: number;
  name: string;
  picture?: string;
};

export const MemberNode: D3Component<SVGGElement, MemberNodeProps> = (
  selection
) => {
  const props = selection.datum();

  createOrUpdateCircleClipPath(props);

  selection.attr("clip-path", "url(#cut-circle)");

  selection
    .selectAll("circle.member-node-background")
    .data([props])
    .join("circle")
    .classed("member-node-background", true)
    .attr("r", (props) => props.size / 2)
    .attr("cx", (props) => props.size / 2)
    .attr("cy", (props) => props.size / 2)
    .attr("fill", (props) => props.backgroundColor)
    .attr("shape-rendering", "geometricPrecision");

  selection
    .selectAll("image")
    .data(props.picture ? [props] : [])
    .join("image")
    .attr("role", "image")
    .attr("href", (props) => props.picture!)
    .attr("height", (props) => props.size)
    .attr("width", (props) => props.size);

  selection
    .selectAll("circle.member-node-border")
    .data([props])
    .join("circle")
    .attr("r", (props) => props.size / 2)
    .attr("cx", (props) => props.size / 2)
    .attr("cy", (props) => props.size / 2)
    .attr("fill", "transparent")
    .attr("stroke-width", 1.5)
    .attr("stroke", (props) => props.color)
    .attr("shape-rendering", "geometricPrecision");

  selection
    .selectAll("title")
    .data([props])
    .join("title")
    .text((props) => props.name);

  return selection;
};
