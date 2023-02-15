import React, { useState } from "react";
import ProductList from "../../components/ProductList";
import SearchBarInput from "../../components/SearchBar";
import styles from "./index.module.scss";

const ProductsPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className={styles.root}>
      <SearchBarInput onChange={setSearchValue} />
      <ProductList searchValue={searchValue} />
    </div>
  );
};

export default ProductsPage;
