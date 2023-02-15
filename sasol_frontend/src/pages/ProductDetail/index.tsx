import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import Loading from "../../components/Loading";

const ProductDetailPage = () => {
  const { productId = "" } = useParams();
  const { isError, isLoading, data: product } = useProduct(parseInt(productId));

  if (isLoading) {
    return <Loading text={"Loading Product..."} />;
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

export default ProductDetailPage;
