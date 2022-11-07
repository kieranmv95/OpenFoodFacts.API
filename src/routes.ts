import { Router } from "express";
import getOFAProduct from "./helpers/ofaApi";
import transformProduct from "./helpers/transformProduct";

const routes = Router();

routes.get("/:ean", async (req, res) => {
  const { ean } = req.params;

  const ofaProduct = await getOFAProduct(ean);
  const product = transformProduct(ofaProduct.product);

  res.json(product);
});

export default routes;
