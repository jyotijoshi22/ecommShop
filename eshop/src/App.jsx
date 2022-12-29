import { useState, useEffect } from "react";
import styles from "./App.module.scss";
//import Cart from "./containers/Cart"
import { getStoreItems } from "./services/data";
import { Outlet } from "react-router-dom";

function App() {
  // Products state stores product array locally
	const [products, setProducts] = useState([]);

	// Cart state stores product array locally
	//const [cart, setCart] = useState([]);

	// Sets products state from Database
	const fetchProducts = async () => {
		setProducts(await getStoreItems());
	};

	// // Sets cart state from Database
	// const fetchCart = async () => {
	// 	setCart(await getCart());
	// };

	// Initialise products and cart on page mount
	useEffect(() => {
		fetchProducts();
		//fetchCart();
	}, []);

  return (
    <div className={styles.App__Content}>
      <Outlet context={[products, setProducts]} />
    </div>
  );
}

export default App;
