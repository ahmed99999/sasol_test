import { useQuery } from "react-query";
import { fetchProducts } from "../services";

const onSuccess = () => {
  console.log("fetch products successfully");
};

const onError = () => {
  console.log("encountering errors while fetching products");
};

const useProducts = (searchValue: string = "") => {
  return useQuery("products", () => fetchProducts(searchValue), {
    staleTime: 50000,
    onSuccess: onSuccess,
    onError: onError,
  });
};

export { useProducts };
