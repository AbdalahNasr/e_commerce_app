import { Product } from "./product-list-data";

export interface ProductResponse {

    statusCode: number;
  message: string;
  data?: Product[];
}
