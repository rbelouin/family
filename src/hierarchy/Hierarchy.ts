import * as d3 from "d3";
import { D3Component } from "../types";
import { FamilyNode } from "./FamilyNode";
import { MemberNode } from "./MemberNode";

// This component is extensively inspired by the following d3 example:
// https://observablehq.com/@d3/force-directed-tree

export type Data =
  | {
      type: "family";
      value?: number;
      children?: Data[];
    }
  | {
      type: "member";
      name: string;
      picture?: string;
      value?: number;
      children?: Data[];
    };

export type HierarchyProps = {
  // Width of the generated SVG element�s viewport
  width: number;
  // Height of the generated SVG element�s viewport
  height: number;
  // Distance between each node of the hierarchy
  distance: number;
  // Color used for the links and borders
  color?: string;
  // Color used for instance when pictures are missing on member nodes
  backgroundColor?: string;
  // Size (both width and length) used to render the family nodes
  familyNodeSize?: number;
  // Size (both width and length) used to render the member nodes
  memberNodeSize?: number;
  // Whether to simulate forces between the nodes (true by default)
  forcesEnabled?: boolean;
  // Whether to rearrange the nodes in a circle
  circularArrangement?: boolean;
  // Families and members, organized as a hierarchy of nodes
  data: Data;
};

type Node = d3.HierarchyNode<Data> & d3.SimulationNodeDatum;
type Link = d3.HierarchyLink<Data> & d3.SimulationLinkDatum<Node>;

export const Hierarchy: D3Component<HierarchyProps, SVGSVGElement> = (
  props
) => {
  const {
    width,
    height,
    distance,
    color = "#CC0",
    backgroundColor = "#FFF",
    familyNodeSize = 7,
    memberNodeSize = 20,
    forcesEnabled = true,
    circularArrangement = false,
    data,
  } = props;

  const root = d3.hierarchy(data) as Node;

  if (circularArrangement) {
    arrangeNodesOnACircle(root, distance);
  }

  const links = root.links() as Link[];
  const nodes = root.descendants();

  const svg = d3
    .create("svg")
    .datum(props)
    .attr("viewBox", [-width / 2, -height / 2, width, height]);

  const link = svg
    .append("g")
    .attr("stroke", color)
    .selectAll("line")
    .data(links)
    .join("line");

  const node = svg
    .append("g")
    .selectAll(".node")
    .data(nodes)
    .join("g")
    .classed("node", true)
    .append((node) =>
      node.data.type === "family"
        ? FamilyNode({ ...node.data, color, size: familyNodeSize }).node()!
        : MemberNode({
            ...node.data,
            color,
            backgroundColor,
            size: memberNodeSize,
          }).node()!
    );

  updateCoordinates(node, link, familyNodeSize, memberNodeSize);
  if (forcesEnabled) {
    applyForces(nodes, links, memberNodeSize, () =>
      updateCoordinates(node, link, familyNodeSize, memberNodeSize)
    );
  }

  return svg;
};

function applyForces(
  nodes: Node[],
  links: Link[],
  distance: number,
  onTick: () => void
) {
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink<Node, Link>(links)
        .id((d) => d.id || "")
        .distance(distance)
        .strength(1)
    )
    .force("charge", d3.forceManyBody().strength(-100))
    .force("x", d3.forceX())
    .force("y", d3.forceY());

  simulation.on("tick", onTick);
}

function updateCoordinates(
  node: d3.Selection<SVGGElement, Node, SVGGElement, HierarchyProps>,
  link: d3.Selection<
    d3.BaseType | SVGLineElement,
    Link,
    SVGGElement,
    HierarchyProps
  >,
  familyNodeSize: number,
  memberNodeSize: number
) {
  node.attr("transform", (d) =>
    d.data.type === "family"
      ? `translate(${d.x! - familyNodeSize / 2}, ${d.y! - familyNodeSize / 2})`
      : `translate(${d.x! - memberNodeSize / 2}, ${d.y! - memberNodeSize / 2})`
  );

  link
    .attr("x1", (d) => (d.source as Node).x || null)
    .attr("y1", (d) => (d.source as Node).y || null)
    .attr("x2", (d) => (d.target as Node).x || null)
    .attr("y2", (d) => (d.target as Node).y || null);
}

function arrangeNodesOnACircle(root: Node, distance: number) {
  // First of all, we give nodes a weight based on their number of children
  // so that we can use this value to divide the "radial space".
  root.sum(() => 1);

  function arrangeNode(node: Node, layer: number, range: [number, number]) {
    // A node will position itself on the bisector of the angle it is being allocated,
    // and a distance from the center that is proportional to its depth in the hierarchy.
    const [x, y] = d3.pointRadial((range[0] + range[1]) / 2, distance * layer);
    node.x = x;
    node.y = y;

    const children = node.children || [];

    const sectionAngle = range[1] - range[0];
    let angleStart = range[0];

    // Then it divides the angle into N sections, where N is the number of direct children,
    // and keeps each section proportional to the weight of the direct children.
    children.forEach((child) => {
      const ratio =
        node.value && child.value
          ? child.value / node.value
          : 1 / children.length;

      const angleEnd = angleStart + ratio * sectionAngle;

      // And it does that recursively until there are no more children
      // So be mindful about the data you give to the component, as it will overflow
      // the call stack if your hierarchy somehow has circular dependencies.
      arrangeNode(child, layer + 1, [angleStart, angleEnd]);

      angleStart = angleEnd;
    });
  }

  arrangeNode(root, 0, [0, 2 * Math.PI]);
}

export default Hierarchy;