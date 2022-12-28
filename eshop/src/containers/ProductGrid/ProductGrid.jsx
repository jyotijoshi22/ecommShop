import styles from "./ProductGrid.module.scss";
import { getStoreItems } from "../../services/data";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { Outlet } from "react-router-dom";

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
      <div className={styles.ProductGrid_Grid}>
        {products.map((pro) => {
        //return <h3 key={pro.id}> {pro.price}</h3>;
          return <ProductCard key={pro.id} product={pro} />;
      })}
      </div>
    </div>
  );
};

export default ProductGrid;
