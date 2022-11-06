import { Nova } from "./Nova";
import { NutriScoreGrade } from "./NutriScoreGrade";
import { NutritionalValues } from "./NutritionalValues";

export type Product = {
  id: string;
  name: string;
  allergens: string[];
  image: {
    url: string;
    thumb_url: string;
  };
  nova?: Nova;
  nutrition_100g: NutritionalValues | null;
  nutriscore?: {
    grade: NutriScoreGrade;
    negative_points: number;
    positive_points: number;
  };
  ingredients: string[] | null;
  vegetarian: boolean;
  vegan: boolean;
  macros: {
    carbs: number;
    fat: number;
    protein: number;
  };
};
