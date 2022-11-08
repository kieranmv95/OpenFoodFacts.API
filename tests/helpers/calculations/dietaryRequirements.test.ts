import { dietaryRequirement } from "../../../src/helpers/calculations";
import { Ingredient } from "../../../src/types";

describe("Dieatary Requirements", () => {
  const testDietaryRequirements = [
    {
      description: "checks requirements when a single item is vegan",
      params: [
        [
          {
            text: "string",
            vegan: "yes",
            vegetarian: "no",
          },
        ],
        "vegan",
      ],
      expected: true,
    },
    {
      description: "checks requirements when all items are vegan",
      params: [
        [
          {
            text: "string",
            vegan: "yes",
            vegetarian: "no",
          },
          {
            text: "string",
            vegan: "yes",
            vegetarian: "no",
          },
        ],
        "vegan",
      ],
      expected: true,
    },
    {
      description: "checks requirements when a single item is vegetarian",
      params: [
        [
          {
            text: "string",
            vegan: "no",
            vegetarian: "yes",
          },
        ],
        "vegetarian",
      ],
      expected: true,
    },
    {
      description: "checks requirements when all items are vegetarian",
      params: [
        [
          {
            text: "string",
            vegan: "no",
            vegetarian: "yes",
          },
          {
            text: "string",
            vegan: "no",
            vegetarian: "yes",
          },
        ],
        "vegetarian",
      ],
      expected: true,
    },
    {
      description: "checks requirements when one item is vegan",
      params: [
        [
          {
            text: "string",
            vegan: "yes",
            vegetarian: "yes",
          },
          {
            text: "string",
            vegan: "no",
            vegetarian: "yes",
          },
        ],
        "vegan",
      ],
      expected: false,
    },
    {
      description: "checks requirements when one item is vegetarian",
      params: [
        [
          {
            text: "string",
            vegan: "yes",
            vegetarian: "no",
          },
          {
            text: "string",
            vegan: "no",
            vegetarian: "yes",
          },
        ],
        "vegan",
      ],
      expected: false,
    },
    {
      description: "checks vegan requirements when items is missing",
      params: [null, "vegan"],
      expected: null,
    },
    {
      description: "checks vegetarian requirements when items is missing",
      params: [null, "vegetarian"],
      expected: null,
    },
  ];

  testDietaryRequirements.forEach((test) => {
    it(test.description, () => {
      expect(
        dietaryRequirement(
          test.params[0] as Ingredient[] | null,
          test.params[1] as "vegan" | "vegetarian"
        )
      ).toEqual(test.expected);
    });
  });
});
