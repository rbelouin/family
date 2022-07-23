import familyTree from "./config/family-tree.json";
import Hierarchy from "./hierarchy";

const hierarchy = Hierarchy({
  width: 1000,
  height: 1000,
  distance: 30,
  circularArrangement: true,
  data: familyTree,
});

if (hierarchy) {
  document.querySelector("main")?.appendChild(hierarchy);
}
