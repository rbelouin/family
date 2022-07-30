import React from "react";
import { render } from "@testing-library/react";
import { toReact } from "../d3-component/toReact";
import { Hierarchy, Data } from "./Hierarchy";
import { simpleFamilyTree } from "./test-data";

describe("Hierarchy", () => {
  it("should render all the members of the family", () => {
    const memberNames = extractMemberNames(simpleFamilyTree);

    const ReactHierarchy = toReact(Hierarchy, "svg");
    const { queryByText } = render(
      <ReactHierarchy
        width={600}
        height={600}
        distance={10}
        data={simpleFamilyTree}
      />
    );

    memberNames.forEach((memberName) => {
      const element = queryByText(memberName);
      expect(element).toBeDefined();
    });
  });
});

function extractMemberNames(data: Data): string[] {
  switch (data.type) {
    case "family":
      return data.children?.flatMap((child) => extractMemberNames(child)) || [];
    case "member":
      return [data.name].concat(
        data.children?.flatMap((child) => extractMemberNames(child)) || []
      );
  }
}
