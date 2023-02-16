import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import Loading from "../../components/Loading";
import Image from "../../components/Image";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

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

  const showTempPrice = product.temp_price !== product.price;

  const active = product.active ? (
    <div className={styles.inStock}>in-stock</div>
  ) : (
    <div className={styles.outOfStock}>out of stock</div>
  );

  const price = showTempPrice ? (
    <div className={styles.price}>
      <b>Price: </b>
      <h3>{product.temp_price}$</h3>
      <span className={styles.hide}>{product.price}$ </span>
    </div>
  ) : (
    <div>
      <b>Price: </b>
      {product.price}$
    </div>
  );

  return (
    <div className={styles.root}>
      <div>
        <Button size="small">
          <Link className={styles.textLink} to={"/products"}>
            Back to Products
          </Link>
        </Button>

        <Image src={product.picture} className={styles.image} />
      </div>

      <div className={styles.info}>
        <h1>{product.name}</h1>
        <div>
          <h4>Description :</h4>
          <p>{product.description}</p>
        </div>

        {price}

        {active}

        <div className={styles.tags}>
          <span>Tags:</span>
          <ul>
            {product.tags?.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
