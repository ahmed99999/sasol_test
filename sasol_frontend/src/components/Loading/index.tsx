import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styles from "./index.module.scss";

interface Props {
  text: string;
}

const Loading = ({ text }: Props) => {
  return (
    <div className={styles.root}>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
      <h4>{text}</h4>
    </div>
  );
};

export default Loading;
