import React, { useState } from "react";
import Products from "../components/Products";
import SearchbarInput from "../components/SearchBar";

const ProductsPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div>
      <SearchbarInput onChange={setSearchValue} />
      <Products searchValue={searchValue} />
    </div>
  );
};

export default ProductsPage;
