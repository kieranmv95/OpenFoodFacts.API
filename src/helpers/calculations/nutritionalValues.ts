import { NutritionalValues, OFANutritionalValues } from "../../types";

const nutritionalValues = (
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

export default nutritionalValues;
