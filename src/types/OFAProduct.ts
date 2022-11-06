import { Ingredient } from "./Ingredient";
import { NovaRating } from "./Nova";
import { NutriScoreGrade } from "./NutriScoreGrade";
import { OFANutritionalValues } from "./OFANutritionalValues";

export type OFAProduct = {
  _id: string;
  product_name: string;
  allergens: string[];
  allergens_from_ingredients: string;
  image_url: string;
  image_thumb_url: string;
  nova_group?: NovaRating;
  nutriments: OFANutritionalValues;
  nutriscore_grade?: NutriScoreGrade;
  nutriscore_data: {
    negative_points: number;
    positive_points: number;
  };
  ingredients?: Ingredient[];
};
