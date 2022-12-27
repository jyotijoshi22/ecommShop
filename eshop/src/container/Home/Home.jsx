import styles from "./Home.module.scss";
import NavBar from "../NavBar/NavBar";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
//import ProductGrid from "../ProductGrid/ProductGrid";

const Home = () => {
  return (
    <div className={styles.Home}>
      <NavBar />
      <ProductCarousel />
      {/* <ProductGrid /> */}
    </div>
  );
};

export default Home;
