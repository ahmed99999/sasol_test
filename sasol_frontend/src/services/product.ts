import request from "../lib/request";
import { ProductModel } from "../models";

const fetchProduct = async (
  productId: number
): Promise<ProductModel | undefined> => {
  try {
    const response = await request.get<ProductModel>(`/products/${productId}`);

    return response.data;
  } catch (e) {
    console.error(e);
    return;
  }
};

export { fetchProduct };
