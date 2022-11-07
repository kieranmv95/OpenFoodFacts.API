import { NutriScoreGrade } from "../types/NutriScoreGrade";
import {
  Ingredient,
  novaConfig,
  Nova,
  NovaRating,
  OFAProduct,
  Product,
  NutritionalValues,
  OFANutritionalValues,
  AllergenType,
} from "../types";

const format_allergens = (
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

const format_nova = (rating: NovaRating): Nova | null => {
  if (!rating) return null;
  return {
    rating,
    description: novaConfig[rating].description,
  };
};

const checkDietaryRequirement = (
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

const calculateMacros = (
  nutriments: any
): { carbs: number; fat: number; protein: number } => {
  const total =
    100 /
    (nutriments.carbohydrates_100g +
      nutriments.fat_100g +
      nutriments.proteins_100g);

  return {
    carbs: nutriments.carbohydrates_100g * total,
    fat: nutriments.fat_100g * total,
    protein: nutriments.proteins_100g * total,
  };
};

const calculateNutriscore = (nutriscore: any, grade: NutriScoreGrade) => {
  return {
    grade: grade || null,
    negative_points: nutriscore?.negative_points || null,
    positive_points: nutriscore?.positive_points || null,
  };
};

const calculateIngredients = (ingredients: Ingredient[]): string[] | null => {
  return ingredients ? ingredients.map((ingredient) => ingredient.text) : null;
};

const calculateNutritionalValues = (
  nutriments: OFANutritionalValues
): NutritionalValues | null => {
  if (!Object.keys(nutriments).length) {
    return null;
  }

  return {
    alcohol: nutriments.alcohol_100g ? nutriments.alcohol_100g : null,
    carbohydrates: nutriments.carbohydrates_100g
      ? nutriments.carbohydrates_100g
      : null,
    kcal: nutriments["energy-kcal_100g"]
      ? nutriments["energy-kcal_100g"]
      : null,
    kj: nutriments["energy-kj_100g"] ? nutriments["energy-kj_100g"] : null,
    fat: nutriments.fat_100g ? nutriments.fat_100g : null,
    protein: nutriments.proteins_100g ? nutriments.proteins_100g : null,
    salt: nutriments.salt_100g ? nutriments.salt_100g : null,
    saturated: nutriments["saturated-fat_100g"]
      ? nutriments["saturated-fat_100g"]
      : null,
    sodium: nutriments.sodium_100g ? nutriments.sodium_100g : null,
    sugar: nutriments.sugars_100g ? nutriments.sugars_100g : null,
  };
};

const transformProduct = (ofaProduct: OFAProduct): Product => ({
  id: ofaProduct._id,
  name: ofaProduct.product_name,
  allergens: format_allergens(
    ofaProduct.allergens,
    ofaProduct.allergens_from_ingredients
  ),
  image: {
    url: ofaProduct.image_url,
    thumb_url: ofaProduct.image_thumb_url,
  },
  nova: format_nova(ofaProduct.nova_group),
  nutrition_100g: calculateNutritionalValues(ofaProduct.nutriments),
  nutriscore: calculateNutriscore(
    ofaProduct.nutriscore_data,
    ofaProduct.nutriscore_grade
  ),
  ingredients: calculateIngredients(ofaProduct.ingredients),
  vegetarian: checkDietaryRequirement(ofaProduct.ingredients, "vegetarian"),
  vegan: checkDietaryRequirement(ofaProduct.ingredients, "vegan"),
  macros: calculateMacros(ofaProduct.nutriments),
});

export default transformProduct;
