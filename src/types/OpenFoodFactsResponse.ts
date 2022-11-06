import { OFAProduct } from "./OFAProduct";

export type OpenFoodFactsResponse = {
  code: string;
  product: OFAProduct;
  status: number;
  status_verbose: string;
};
