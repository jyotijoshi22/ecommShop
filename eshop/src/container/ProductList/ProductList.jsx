import ProductCard from "../../components/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = ({ products }) => {
  return (
    <>
      <h2>Product List</h2>
      <div className={styles.ProductList}>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} title={product.Name} />;
          })}
      </div>
    </>
  );
};

export default ProductList;
