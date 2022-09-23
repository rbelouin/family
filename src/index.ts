import * as d3 from "d3";
import { Hierarchy, HierarchyProps, Data } from "./hierarchy";

fetch(process.env.FAMILY_TREE_FILE!)
  .then((res) => res.json() as Promise<Data>)
  .then((familyTree) => {
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
  });
