import familyTree from "../config/family-tree.json";
import type { Data } from "./Hierarchy";

export const complexFamilyTree = familyTree as Data;

export const simpleFamilyTree: Data = {
  type: "family",
  children: [
    {
      type: "member",
      name: "Bandit",
      picture:
        "https://www.bluey.tv/wp-content/uploads/2019/04/char-bandit@2x.png",
      children: [
        {
          type: "family",
          children: [
            {
              type: "member",
              name: "Bob",
              picture:
                "https://www.bluey.tv/wp-content/uploads/2019/07/Grandad.png",
              children: [],
            },
            {
              type: "member",
              name: "Nana",
              picture:
                "https://www.bluey.tv/wp-content/uploads/2019/07/Nana.png",
              children: [],
            },
            {
              type: "member",
              name: "Stripe",
              picture:
                "https://www.bluey.tv/wp-content/uploads/2019/07/Uncle-Stripe.png",
              children: [
                {
                  type: "family",
                  children: [
                    {
                      type: "member",
                      name: "Trixie",
                      picture:
                        "https://www.bluey.tv/wp-content/uploads/2019/07/aunt-trixie.png",
                    },
                    {
                      type: "member",
                      name: "Muffin",
                      picture:
                        "https://www.bluey.tv/wp-content/uploads/2019/07/Muffin-testshadow.png",
                    },
                    {
                      type: "member",
                      name: "Socks",
                      picture:
                        "https://www.bluey.tv/wp-content/uploads/2019/07/Socks.png",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "member",
      name: "Chilli",
      picture:
        "https://www.bluey.tv/wp-content/uploads/2019/04/char-chilli@2x.png",
      children: [],
    },
    {
      type: "member",
      name: "Bluey",
      picture:
        "https://www.bluey.tv/wp-content/uploads/2019/04/char-bluey@2x.png",
      children: [],
    },
    {
      type: "member",
      name: "Bingo",
      picture:
        "https://www.bluey.tv/wp-content/uploads/2019/05/Bingo_dance-2x.png",
      children: [],
    },
  ],
};

export function geometricalTree(breadth: number, depth: number): Data {
  let count = 0;
  return {
    type: "family",
    children: new Array(breadth).fill(undefined).map(() => ({
      type: "member",
      name: `Member ${++count}`,
      children: depth === 0 ? [] : [geometricalTree(breadth, depth - 1)],
    })),
  };
}
