import { useQuery } from "react-query";
import { fetchProduct } from "../services";
import { Product } from "../models";

const onSuccess = (product: Product) => {
  console.log(`Successfully fetched product ${product.name}`);
};

const onError = () => {
  console.log("encountering errors while fetching product");
};

const useProduct = (productId: number) => {
  return useQuery(["product ", productId], () => fetchProduct(productId), {
    staleTime: 50000,
    onSuccess: onSuccess,
    onError: onError,
  });
};

export { useProduct };
