import type { Data } from "./Hierarchy";

export const simpleFamilyTree: Data = {
  type: "family",
  children: [
    {
      type: "member",
      name: "Bandit",
      role: "partner",
      picture:
        "https://www.bluey.tv/wp-content/uploads/2019/04/char-bandit@2x.png",
      children: [
        {
          type: "family",
          children: [
            {
              type: "member",
              name: "Bob",
              role: "partner",
              picture:
                "https://www.bluey.tv/wp-content/uploads/2019/07/Grandad.png",
              children: [],
            },
            {
              type: "member",
              name: "Nana",
              role: "partner",
              picture:
                "https://www.bluey.tv/wp-content/uploads/2019/07/Nana.png",
              children: [],
            },
            {
              type: "member",
              name: "Stripe",
              role: "child",
              picture:
                "https://www.bluey.tv/wp-content/uploads/2019/07/Uncle-Stripe.png",
              children: [
                {
                  type: "family",
                  children: [
                    {
                      type: "member",
                      name: "Trixie",
                      role: "partner",
                      picture:
                        "https://www.bluey.tv/wp-content/uploads/2019/07/aunt-trixie.png",
                    },
                    {
                      type: "member",
                      name: "Muffin",
                      role: "child",
                      picture:
                        "https://www.bluey.tv/wp-content/uploads/2019/07/Muffin-testshadow.png",
                    },
                    {
                      type: "member",
                      name: "Socks",
                      role: "child",
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
      role: "partner",
      picture:
        "https://www.bluey.tv/wp-content/uploads/2019/04/char-chilli@2x.png",
      children: [],
    },
    {
      type: "member",
      name: "Bluey",
      role: "child",
      picture:
        "https://www.bluey.tv/wp-content/uploads/2019/04/char-bluey@2x.png",
      children: [],
    },
    {
      type: "member",
      name: "Bingo",
      role: "child",
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
      role: "child",
      children: depth === 0 ? [] : [geometricalTree(breadth, depth - 1)],
    })),
  };
}

export const complexFamilyTree: Data = {
  type: "family",
  children: [
    {
      type: "member",
      role: "partner",
      name: "member-0",
      children: [
        {
          type: "family",
          children: [
            {
              type: "member",
              role: "partner",
              name: "member-1",
              children: [
                {
                  type: "family",
                  children: [
                    {
                      type: "member",
                      role: "partner",
                      name: "member-2",
                      children: [
                        {
                          type: "member",
                          role: "partner",
                          name: "member-3",
                          children: [],
                        },
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-4",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "partner",
                              name: "member-5",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "member",
                      role: "partner",
                      name: "member-6",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-7",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "partner",
                              name: "member-8",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-9",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-10",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-11",
                                      children: [
                                        {
                                          type: "member",
                                          role: "child",
                                          children: [],
                                          name: "member-12",
                                        },
                                        {
                                          type: "member",
                                          role: "child",
                                          children: [],
                                          name: "member-13",
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-14",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-15",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-16",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-17",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-18",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-19",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-20",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-21",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-22",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-23",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-24",
                              children: [
                                {
                                  type: "member",
                                  role: "partner",
                                  children: [],
                                  name: "member-25",
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-26",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-27",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-28",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-29",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-30",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-31",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-32",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-33",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-34",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-35",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-36",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-37",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-38",
                                              children: [],
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
                              role: "child",
                              name: "member-39",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "member",
                      role: "child",
                      name: "member-40",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-41",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-42",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-43",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-44",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-45",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-46",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-47",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-48",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-49",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-50",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "member",
                      role: "child",
                      name: "member-51",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-52",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-53",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "member",
                      role: "child",
                      name: "member-54",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              type: "member",
              role: "partner",
              name: "member-55",
              children: [
                {
                  type: "family",
                  children: [
                    {
                      type: "member",
                      role: "partner",
                      name: "member-56",
                      children: [
                        {
                          type: "member",
                          role: "partner",
                          children: [],
                          name: "member-57",
                        },
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-58",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "partner",
                              name: "member-59",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-60",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-61",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-62",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-63",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-64",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-65",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-66",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-67",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-68",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-69",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-70",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-71",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-72",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-73",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-74",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-75",
                                              children: [],
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
                              role: "child",
                              name: "member-76",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-77",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-78",
                                      children: [
                                        {
                                          type: "member",
                                          role: "partner",
                                          children: [],
                                          name: "member-79",
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-80",
                                      children: [
                                        {
                                          type: "member",
                                          role: "partner",
                                          children: [],
                                          name: "member-81",
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-82",
                                      children: [
                                        {
                                          type: "member",
                                          role: "partner",
                                          children: [],
                                          name: "member-83",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  type: "member",
                                  role: "partner",
                                  children: [],
                                  name: "member-84",
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-85",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-86",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-87",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-88",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-89",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-90",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-91",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-92",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-93",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-94",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-95",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-96",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-97",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-98",
                                              children: [
                                                {
                                                  type: "family",
                                                  children: [
                                                    {
                                                      type: "member",
                                                      role: "partner",
                                                      name: "member-99",
                                                      children: [],
                                                    },
                                                    {
                                                      type: "member",
                                                      role: "child",
                                                      name: "member-100",
                                                      children: [],
                                                    },
                                                    {
                                                      type: "member",
                                                      role: "child",
                                                      name: "member-101",
                                                      children: [],
                                                    },
                                                    {
                                                      type: "member",
                                                      role: "child",
                                                      name: "member-102",
                                                      children: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-103",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-104",
                                              children: [],
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
                              role: "child",
                              name: "member-105",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-106",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-107",
                                      children: [
                                        {
                                          type: "member",
                                          role: "partner",
                                          children: [],
                                          name: "member-108",
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-109",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-110",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-111",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-112",
                                              children: [],
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
                              role: "child",
                              name: "member-113",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-114",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "member",
                      role: "partner",
                      name: "member-115",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-116",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "partner",
                              name: "member-117",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-118",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-119",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-120",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-121",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-122",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-123",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-124",
                                      children: [
                                        {
                                          type: "member",
                                          role: "partner",
                                          children: [],
                                          name: "member-125",
                                        },
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-126",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-127",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-128",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-129",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-130",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-131",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-132",
                                              children: [],
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
                              role: "child",
                              name: "member-133",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-134",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-135",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-136",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-137",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-138",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-139",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-140",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-141",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-142",
                                              children: [],
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
                              role: "child",
                              name: "member-143",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-144",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-145",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-146",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-147",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-148",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-149",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-150",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-151",
                                              children: [],
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
                              role: "child",
                              name: "member-152",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-153",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-154",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-155",
                                      children: [
                                        {
                                          type: "member",
                                          role: "partner",
                                          children: [],
                                          name: "member-156",
                                        },
                                      ],
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
                      role: "child",
                      name: "member-157",
                      children: [],
                    },
                    {
                      type: "member",
                      role: "child",
                      name: "member-158",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-159",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-160",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "member",
                      role: "other",
                      name: "member-161",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-162",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-163",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-164",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-165",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-166",
                              children: [],
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
              role: "child",
              name: "member-167",
              children: [
                {
                  type: "member",
                  role: "partner",
                  children: [],
                  name: "member-168",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "member",
      role: "partner",
      name: "member-169",
      children: [
        {
          type: "family",
          children: [
            {
              type: "member",
              role: "partner",
              name: "member-170",
              children: [
                {
                  type: "family",
                  children: [
                    {
                      type: "member",
                      role: "partner",
                      name: "member-171",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-172",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "partner",
                              name: "member-173",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-174",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-175",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-176",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-177",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-178",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-179",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-180",
                              children: [
                                {
                                  type: "member",
                                  role: "partner",
                                  children: [],
                                  name: "member-181",
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-182",
                              children: [
                                {
                                  type: "member",
                                  role: "partner",
                                  children: [],
                                  name: "member-183",
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-184",
                              children: [
                                {
                                  type: "member",
                                  role: "partner",
                                  children: [],
                                  name: "member-185",
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-186",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-187",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-188",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-189",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-190",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-191",
                                              children: [],
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
                              role: "child",
                              name: "member-192",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-193",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-194",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-195",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-196",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-197",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-198",
                                      children: [],
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
                      role: "partner",
                      name: "member-199",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-200",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-201",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-202",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-203",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-204",
                                      children: [],
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
                      role: "child",
                      name: "member-205",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-206",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-207",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-208",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-209",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-210",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-211",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "member",
                      role: "child",
                      name: "member-212",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "child",
                              name: "member-213",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-214",
                              children: [],
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
              role: "partner",
              name: "member-215",
              children: [
                {
                  type: "family",
                  children: [
                    {
                      type: "member",
                      role: "partner",
                      name: "member-216",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-217",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "partner",
                              name: "member-218",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-219",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-220",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-221",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-222",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-223",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-224",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-225",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-226",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-227",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-228",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-229",
                                      children: [
                                        {
                                          type: "member",
                                          role: "partner",
                                          children: [],
                                          name: "member-230",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-231",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-232",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-233",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-234",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-235",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-236",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-237",
                                      children: [
                                        {
                                          type: "member",
                                          role: "child",
                                          children: [],
                                          name: "member-238",
                                        },
                                      ],
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
                      role: "partner",
                      name: "member-239",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "partner",
                              name: "member-240",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "partner",
                              name: "member-241",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-242",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-243",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-244",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-245",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-246",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-247",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-248",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-249",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-250",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-251",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-252",
                                      children: [
                                        {
                                          type: "member",
                                          role: "partner",
                                          children: [],
                                          name: "member-253",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-254",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-255",
                                      children: [
                                        {
                                          type: "family",
                                          children: [
                                            {
                                              type: "member",
                                              role: "partner",
                                              name: "member-256",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-257",
                                              children: [],
                                            },
                                            {
                                              type: "member",
                                              role: "child",
                                              name: "member-258",
                                              children: [],
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
                              role: "child",
                              name: "member-259",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-260",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-261",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-262",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-263",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-264",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-265",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-266",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "partner",
                                      name: "member-267",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-268",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-269",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-270",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-271",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-272",
                                      children: [],
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
                      role: "child",
                      name: "member-273",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "child",
                              name: "member-274",
                              children: [
                                {
                                  type: "family",
                                  children: [
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-275",
                                      children: [],
                                    },
                                    {
                                      type: "member",
                                      role: "child",
                                      name: "member-276",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-277",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "member",
                      role: "child",
                      name: "member-278",
                      children: [
                        {
                          type: "member",
                          role: "partner",
                          children: [],
                          name: "member-279",
                        },
                      ],
                    },
                    {
                      type: "member",
                      role: "child",
                      name: "member-280",
                      children: [
                        {
                          type: "family",
                          children: [
                            {
                              type: "member",
                              role: "child",
                              name: "member-281",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-282",
                              children: [],
                            },
                            {
                              type: "member",
                              role: "child",
                              name: "member-283",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "member",
                      role: "child",
                      name: "member-284",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              type: "member",
              role: "child",
              name: "member-285",
              children: [],
            },
            {
              type: "member",
              role: "child",
              name: "member-286",
              children: [],
            },
            {
              type: "member",
              role: "child",
              name: "member-287",
              children: [
                {
                  type: "family",
                  children: [
                    {
                      type: "member",
                      role: "partner",
                      name: "member-288",
                      children: [],
                    },
                    {
                      type: "member",
                      role: "child",
                      name: "member-289",
                      children: [],
                    },
                    {
                      type: "member",
                      role: "child",
                      name: "member-290",
                      children: [],
                    },
                    {
                      type: "member",
                      role: "child",
                      name: "member-291",
                      children: [],
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
      role: "child",
      name: "member-292",
      children: [],
    },
    {
      type: "member",
      role: "child",
      name: "member-293",
      children: [],
    },
  ],
};
