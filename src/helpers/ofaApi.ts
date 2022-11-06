import axios from "axios";
import { OpenFoodFactsResponse } from "../types";

const getOFAProduct = async (ean: string): Promise<OpenFoodFactsResponse> => {
  const ofaRes = await axios<OpenFoodFactsResponse>({
    method: "get",
    url: `https://world.openfoodfacts.org/api/v0/product/${ean}.json`,
  });

  return ofaRes.data;
};

export default getOFAProduct;
