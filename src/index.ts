import * as d3 from "d3";
import familyTree from "./config/family-tree.json";
import { Hierarchy, HierarchyProps, Data } from "./hierarchy";

const hierarchyProps: HierarchyProps = {
  width: 1600,
  height: 1600,
  backgroundColor: "#333333",
  distance: 30,
  circularArrangement: true,
  data: familyTree as Data, // TypeScript needs some little help here
};

(
  d3.select("main").append("svg").datum(hierarchyProps) as d3.Selection<
    d3.BaseType | SVGSVGElement,
    HierarchyProps,
    HTMLElement,
    undefined
  >
).call(Hierarchy);
