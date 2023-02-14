import request from "../lib/request";
import { Product } from "../models";

const fetchProduct = async (
  productId: number
): Promise<Product | undefined> => {
  try {
    const response = await request.get<Product>(`/products/${productId}`);

    return response.data;
  } catch (e) {
    console.error(e);
    return;
  }
};

export { fetchProduct };
