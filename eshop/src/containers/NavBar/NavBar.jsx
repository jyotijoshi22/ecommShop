import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBar__left}>
        <img src="./src/assets/logo.jpg" height="50px" width="200px" />
      </div>

      <div className={styles.NavBar__right}>
        <NavLink to="/" className={styles.NavBar__right__home}>
          HOME
        </NavLink>
        <NavLink to="/Products" className={styles.NavBar__right__product}>
          PRODUCTS
        </NavLink>
        <NavLink to="/Cart" className={styles.NavBar__right__cart}>
          CART <img src="./src/assets/Cart.png" height="40px" />
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;
