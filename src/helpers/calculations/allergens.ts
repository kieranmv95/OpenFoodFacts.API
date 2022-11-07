import { AllergenType } from "../../types";

const allergens = (
  allergens: AllergenType,
  allergensFromIngredients: AllergenType
): string[] => {
  const standardiseAllergenInfo = (allergen: AllergenType): string[] => {
    if (Array.isArray(allergen)) {
      return allergen;
    } else {
      return allergen.split(",");
    }
  };

  const formattedAllergens: string[] = [
    ...new Set([
      ...standardiseAllergenInfo(allergens),
      ...standardiseAllergenInfo(allergensFromIngredients),
    ]),
  ];

  return formattedAllergens
    .map((allergen) => allergen.trim())
    .filter(function (el) {
      return el != "";
    });
};

export default allergens;
