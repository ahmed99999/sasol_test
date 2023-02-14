import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

const ProductDetail = () => {
  const { productId = "" } = useParams();
  const { isError, isLoading, data: product } = useProduct(parseInt(productId));

  if (isLoading) {
    return <div>Loading Product...</div>;
  }

  if (isError) {
    return <div>Error Loading Product, please try again later</div>;
  }

  if (!product) {
    return <div>this product was not found</div>;
  }

  return (
    <div>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.active}</div>
      <div>{product.description}</div>
    </div>
  );
};

export default ProductDetail;
