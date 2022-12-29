import styles from "./ProductGrid.module.scss";
import { getStoreItems } from "../../services/server";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

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
      <h3> List of Products</h3>
      {/* Product Cards in a grid */}
      <div className={styles.ProductGrid__Grid}>
        {products.map((pro) => {
          return <ProductCard key={pro.id} product={pro} />;
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
