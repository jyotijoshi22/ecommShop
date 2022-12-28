import styles from "./ProductGrid.module.scss";
import { getStoreItems } from "../../services/data";
import { useEffect, useState } from "react";
import ProductList from "../ProductList";

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
      <ProductList products={products} />
      {/* {products.map((pro) => {
        return <h3 key={pro.id}> {pro.price}</h3>;
      })} */}
    </div>
  );
};

export default ProductGrid;
