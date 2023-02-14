import React, { useState } from "react";
import Products from "../../components/Products";
import SearchBarInput from "../../components/SearchBar";

const ProductsPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div>
      <SearchBarInput onChange={setSearchValue} />
      <Products searchValue={searchValue} />
    </div>
  );
};

export default ProductsPage;
