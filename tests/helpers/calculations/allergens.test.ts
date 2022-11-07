import { allergens } from "../../../src/helpers/calculations";

describe("Allergens", () => {
  const testAllergens = [
    {
      description: "returns an empty array when no allergen info is passed",
      params: [undefined, undefined],
      expected: [],
    },
    {
      description: "returns an array of string when passed csv",
      params: ["one, two", "three, four"],
      expected: ["one", "two", "three", "four"],
    },
    {
      description: "returns an array of strings when passed seperate arrays",
      params: [
        ["one", "two"],
        ["three", "four"],
      ],
      expected: ["one", "two", "three", "four"],
    },
    {
      description: "returns an array of strings when passed mixed data",
      params: ["one, two", ["three", "four"]],
      expected: ["one", "two", "three", "four"],
    },
    {
      description: "returns an array of strings when passed mixed data",
      params: ["one, two", ["three", "four"]],
      expected: ["one", "two", "three", "four"],
    },
    {
      description:
        "returns a single array of strings when passed missing data on 2nd param",
      params: ["one, two", undefined],
      expected: ["one", "two"],
    },
    {
      description:
        "returns a single array of strings when passed missing data on first param",
      params: [undefined, ["three", "four"]],
      expected: ["three", "four"],
    },
  ];

  testAllergens.forEach((test) => {
    it(test.description, () => {
      expect(allergens(...test.params)).toEqual(test.expected);
    });
  });
});
