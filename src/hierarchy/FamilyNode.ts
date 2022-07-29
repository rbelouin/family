import { D3Component } from "../d3-component";

export type FamilyNodeProps = { type: "family"; color: string; size: number };
export const FamilyNode: D3Component<SVGCircleElement, FamilyNodeProps> = (
  selection
) => {
  return selection
    .attr("fill", (props) => props.color)
    .attr("r", (props) => props.size / 2)
    .attr("cx", (props) => props.size / 2)
    .attr("cy", (props) => props.size / 2);
};
