import { Nova, NutriScoreGrade, NutritionalValues } from "./";

export type Product = {
  id: string;
  name: string;
  allergens: string[];
  image: {
    url: string;
    thumb_url: string;
  };
  nova: Nova | null;
  nutrition_100g: NutritionalValues | null;
  nutriscore: {
    grade: NutriScoreGrade | null;
    negative_points: number | null;
    positive_points: number | null;
  };
  ingredients: string[] | null;
  vegetarian: boolean | null;
  vegan: boolean | null;
  macros: {
    carbs: number | null;
    fat: number | null;
    protein: number | null;
  };
};
