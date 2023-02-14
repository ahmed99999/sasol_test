import React, { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";

import Product from "../Product";

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
    return <div>Error Loading Products, please try again later</div>;
  }

  if (!products || !products.length) {
    return <div>There are no products matching your search</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
