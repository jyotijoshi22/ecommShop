import styles from "./Home.module.scss";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import ProductGrid from "../ProductGrid/ProductGrid";

const Home = () => {
  return (
    <div className={styles.Home}>
      <ProductCarousel />
      <ProductGrid />
    </div>
  );
};

export default Home;
