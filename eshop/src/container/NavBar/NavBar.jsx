import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBar__left}>
        {/* add  same image */}
        NAME ECOMMERCE SHOP& ADD LOGO{" "}
      </div>

      <div className={styles.NavBar__right}>
        <NavLink to="/signUp" className={styles.NavBar__right__signUp}>
          SIGN UP
        </NavLink>
        <NavLink to="/signUp" className={styles.NavBar__right__login}>
          LOGIN
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;
