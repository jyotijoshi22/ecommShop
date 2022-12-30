import { useState, useEffect } from "react";
import styles from "./App.module.scss";
import { getStoreItems, getCart, seedProducts } from "./services/server";
import NavBar from "./containers/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  seedProducts();
  // Products state stores product array locally
  const [products, setProducts] = useState([]);

  // Cart state stores product array locally
  const [cart, setCart] = useState([]);

  // Sets products state from Database
  const fetchProducts = async () => {
    setProducts(await getStoreItems());
  };

  // Sets cart state from Database
  const fetchCart = async () => {
    setCart(await getCart());
  };

  // Initialise products and cart on page mount
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div className={styles.App__Content}>
      <NavBar />
      <Outlet context={[products, setProducts, cart, setCart]} />
    </div>
  );
}

export default App;
