import styles from "./ProductGrid.module.scss";
import ProductCard from "../../components/ProductCard";
import { useOutletContext } from "react-router-dom";

const ProductGrid = () => {
  const [products] = useOutletContext();

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
