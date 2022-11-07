import { Ingredient } from "../../types";

const dietaryRequirement = (
  ingredients: Ingredient[],
  dietaryRequirement: "vegan" | "vegetarian"
): boolean | null => {
  if (!ingredients) return null;

  const dietaryValues = new Set();

  ingredients.forEach((ingredient) => {
    dietaryValues.add(ingredient[dietaryRequirement]);
  });

  const computedValues = [...dietaryValues];

  if (computedValues.length === 1) {
    if (computedValues[0] === "yes") {
      return true;
    } else if (computedValues[0] === "no") {
      return false;
    }
  } else {
    return false;
  }
};

export default dietaryRequirement;
