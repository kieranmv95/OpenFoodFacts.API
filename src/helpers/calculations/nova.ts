import { novaConfig, Nova, NovaRating } from "../../types";

const nova = (rating: NovaRating): Nova | null => {
  if (!rating) return null;
  return {
    rating,
    description: novaConfig[rating].description,
  };
};

export default nova;
