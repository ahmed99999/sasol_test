import React from "react";
import { ProductResponse } from "../../models";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Props {
  product: ProductResponse;
}

const Product = ({ product }: Props) => {
  return (
    <Card sx={{ width: 200 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={product.picture}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Price: </b>
          {product.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link className={styles.textLink} to={`/products/${product.id}`}>
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
