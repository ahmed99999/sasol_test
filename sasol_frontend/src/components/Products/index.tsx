import React, { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";

interface Props {
  searchValue: string;
}

const Products = ({ searchValue = "" }: Props) => {
  const productsResult = useProducts(searchValue);
  const { isError, isLoading, data: products } = productsResult;

  useEffect(() => {
    productsResult
      .refetch()
      .then(() => console.log(`getting new search data for ${searchValue}`));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

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
