import request from "../lib/request";
import { ProductResponse } from "../models";

const getFetchURL = (searchValue: string) =>
  "/products" + searchValue ? "?search=searchValue" : "";

const fetchProducts = async (
  searchValue: string = ""
): Promise<ProductResponse[]> => {
  try {
    const url = getFetchURL(searchValue);
    const response = await request.get<ProductResponse[]>(url);

    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export { fetchProducts };
