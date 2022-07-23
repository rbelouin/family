import Hierarchy from "./hierarchy";

const hierarchy = Hierarchy({
  width: 1000,
  height: 1000,
  distance: 30,
});

if (hierarchy) {
  document.querySelector("main")?.appendChild(hierarchy);
}
