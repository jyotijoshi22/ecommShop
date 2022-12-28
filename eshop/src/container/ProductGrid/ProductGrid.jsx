import styles from "./ProductGrid.module.scss";
import { getStoreItems } from "../../services/data";
import { useEffect } from "react";

const ProductGrid = () => {
  useEffect(() => {
    getStoreItems();
  }, []);
  return <div className={styles.ProductGrid}>product grid</div>;
};

export default ProductGrid;
