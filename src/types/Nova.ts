export type NovaRating = 1 | 2 | 3 | 4;

type NovaDescription =
  | "Unprocessed or minimally processed foods"
  | "Processed culinary ingredients"
  | "Processed foods"
  | "Ultra-processed food and drink products";

export const novaConfig: {
  [key in NovaRating]: { description: NovaDescription };
} = {
  1: {
    description: "Unprocessed or minimally processed foods",
  },
  2: {
    description: "Processed culinary ingredients",
  },
  3: {
    description: "Processed foods",
  },
  4: {
    description: "Ultra-processed food and drink products",
  },
};

export type Nova = {
  rating: NovaRating;
  description: NovaDescription;
};
