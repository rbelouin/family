import * as d3 from "d3";
import { HierarchyLink, HierarchyNode, SimulationLinkDatum, SimulationNodeDatum } from "d3";
import data from "./data.json";

// Source: https://observablehq.com/@d3/force-directed-tree

const width = 1000;
const height = 1000;
const distance = 30;

type Datum = { name: string; value?: number; children?: Datum[] };
type Node = HierarchyNode<Datum> & SimulationNodeDatum;
type Link = HierarchyLink<Datum> & SimulationLinkDatum<Node>;

const root = d3.hierarchy(data) as Node;
organizeNodes(root);

const links = root.links() as Link[];
const nodes = root.descendants();

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink<Node, Link>(links).id(d => d.id || '').distance(0).strength(1))
    .force("charge", d3.forceManyBody().strength(-50))
    .force("x", d3.forceX())
    .force("y", d3.forceY());

const svg = d3.create("svg")
    .attr("viewBox", [-width / 2, -height / 2, width, height]);

const link = svg.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
  .selectAll("line")
  .data(links)
  .join("line");

const node = svg.append("g")
    .attr("fill", "#fff")
    .attr("stroke", "#000")
    .attr("stroke-width", 1.5)
  .selectAll("circle")
  .data(nodes)
  .join("circle")
    .attr("fill", d => d.children ? null : "#000")
    .attr("stroke", d => d.children ? null : "#fff")
    .attr("r", 3.5);

node.append("title")
    .text(d => `${d.data.name} - ${d.x},${d.y}`);

node
    .attr("cx", d => d.x || null)
    .attr("cy", d => d.y || null);

link
    .attr("x1", d => (d.source as Node).x || null)
    .attr("y1", d => (d.source as Node).y || null)
    .attr("x2", d => (d.target as Node).x || null)
    .attr("y2", d => (d.target as Node).y || null);

simulation.on("tick", () => {
  link
      .attr("x1", d => (d.source as Node).x || null)
      .attr("y1", d => (d.source as Node).y || null)
      .attr("x2", d => (d.target as Node).x || null)
      .attr("y2", d => (d.target as Node).y || null);

  node
      .attr("cx", d => d.x || null)
      .attr("cy", d => d.y || null);
});

const chart = svg.node();
if (chart) {
  document.querySelector("main")?.appendChild(chart);
}

function organizeNodes(rootNode: Node) {
  root.sum(() => 1);

  function organizeNode(node: Node, layer: number, range: [number, number]) {
    const [x, y] = d3.pointRadial((range[0] + range[1]) / 2, distance * layer);
    node.x = x;
    node.y = y;

    const children = node.children || [];

    const sectionAngle = range[1] - range[0];
    let angleStart = range[0];
    children.forEach((child) => {
      const ratio = node.value && child.value
        ? child.value / node.value
        : 1 / children.length;
      const angleEnd = angleStart + ratio * sectionAngle;
      organizeNode(child, layer + 1, [angleStart, angleEnd]);

      angleStart = angleEnd;
    });
  }

  organizeNode(rootNode, 0, [0, 2*Math.PI]);
}
