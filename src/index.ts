import familyTree from "./config/family-tree.json";
import { Hierarchy, Data } from "./hierarchy";

const hierarchy = Hierarchy({
  width: 1600,
  height: 1600,
  backgroundColor: "#333333",
  distance: 30,
  circularArrangement: true,
  data: familyTree as Data, // TypeScript needs some little help here
}).node();

if (hierarchy) {
  document.querySelector("main")?.appendChild(hierarchy);
}
