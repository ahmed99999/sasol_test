import React, { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import styles from "./index.module.scss";

import Product from "../Product";
import Loading from "../Loading";

interface Props {
  searchValue: string;
}

const ProductList = ({ searchValue = "" }: Props) => {
  const productsResult = useProducts(searchValue);
  const { isError, isLoading, data: products } = productsResult;

  useEffect(() => {
    productsResult
      .refetch()
      .then(() => console.log(`getting new search data for ${searchValue}`));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  if (isLoading) {
    return <Loading text={"Loading Products..."} />;
  }

  if (isError) {
    return <div>Error Loading Products, please try again later</div>;
  }

  if (!products || !products.length) {
    return <div>There are no products matching your search</div>;
  }

  return (
    <div className={styles.root}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
