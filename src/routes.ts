import { Router } from "express";
import getOFAProduct from "./helpers/ofaApi";
import transformProduct from "./helpers/transformProduct";

const routes = Router();

// TEST EAN's
// 3017620422003 - Nutella
// 5449000131805 - Coca Cola Zero | low everything
// 8715700208602 - Bulls Eye BBQ Sauce
// 7613035974685 - Water, eau minérale naturelle
// 20332167 - Milk
// 5060469985183 - Whey  | high protein
//  - Ryze supplements | lots of missing data

routes.get("/:ean", async (req, res) => {
  const { ean } = req.params;

  const ofaProduct = await getOFAProduct(ean);
  const product = transformProduct(ofaProduct.product);

  res.json(product);
});

export default routes;
