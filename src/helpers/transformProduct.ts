import * as calculate from "./calculations";
import { OFAProduct, Product } from "../types";

const transformProduct = (ofaProduct: OFAProduct): Product => ({
  id: ofaProduct._id,
  name: ofaProduct.product_name,
  allergens: calculate.allergens(
    ofaProduct.allergens,
    ofaProduct.allergens_from_ingredients
  ),
  image: {
    url: ofaProduct.image_url,
    thumb_url: ofaProduct.image_thumb_url,
  },
  nova: calculate.nova(ofaProduct.nova_group),
  nutrition_100g: calculate.nutritionalValues(ofaProduct.nutriments),
  nutriscore: calculate.nutriscore(
    ofaProduct.nutriscore_data,
    ofaProduct.nutriscore_grade
  ),
  ingredients: calculate.ingredients(ofaProduct.ingredients),
  vegetarian: calculate.dietaryRequirement(
    ofaProduct.ingredients,
    "vegetarian"
  ),
  vegan: calculate.dietaryRequirement(ofaProduct.ingredients, "vegan"),
  macros: calculate.macros(ofaProduct.nutriments),
});

export default transformProduct;
