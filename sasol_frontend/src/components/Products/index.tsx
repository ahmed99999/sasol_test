import React from "react";
import { useProducts } from "../../hooks/useProducts";

interface Props {
  searchValue: string;
}

const Products = ({ searchValue = "" }: Props) => {
  const productsResult = useProducts(searchValue);
  const { isError, isLoading, data: products } = productsResult;

  if (isLoading) {
    return <div>Loading Products...</div>;
  }

  if (isError) {
    return <div>Error Loading Products...</div>;
  }

  if (!products || !products.length) {
    return <div>There are no products matching your search</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default Products;
