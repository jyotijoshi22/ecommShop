import styles from "./ProductGrid.module.scss";
import { getStoreItems } from "../../services/data";
import { useEffect, useState } from "react";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const wrapper = async () => {
      const allProducts = await getStoreItems();
      setProducts(allProducts);
    };
    wrapper();
  }, []);
  return (
    <div className={styles.ProductGrid}>
      <h1> List of Products</h1>
      {products.map((pro) => {
        return <h3 key={pro.id}> {pro.price}</h3>;
      })}
    </div>
  );
};

export default ProductGrid;
