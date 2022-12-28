import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.ProductCard}>
      {/* Display image */}
      <h2>Title</h2>
      <p> Price</p>
      {/* Add somethig to deal with favourite or not */}
      <button> Add to Cart </button>
    </div>
  );
};

export default ProductCard;
