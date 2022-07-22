import * as d3 from "d3";
import { HierarchyLink, HierarchyNode, SimulationLinkDatum, SimulationNodeDatum } from "d3";
import data from "./data.json";

// Source: https://observablehq.com/@d3/force-directed-tree

const width = 600;
const height = 600;

type Datum = { name: string; value?: number; children?: Datum[] };
type Node = HierarchyNode<Datum> & SimulationNodeDatum;
type Link = HierarchyLink<Datum> & SimulationLinkDatum<Node>;

const root = d3.hierarchy(data) as Node;
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
    .text(d => d.data.name);

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
