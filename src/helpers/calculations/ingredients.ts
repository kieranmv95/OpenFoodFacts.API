import { Ingredient } from "../../types";

const ingredients = (ingredients: Ingredient[]): string[] | null => {
  return ingredients ? ingredients.map((ingredient) => ingredient.text) : null;
};

export default ingredients;
