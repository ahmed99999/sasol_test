import React from "react";
import { ProductResponse } from "../../models";

interface Props {
  product: ProductResponse;
}

const Product = ({ product }: Props) => {
  return (
    <div>
      <div>{product.name}</div>
    </div>
  );
};

export default Product;
