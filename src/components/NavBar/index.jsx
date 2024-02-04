import Cart from "../../assets/svg/cart.svg";
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import styles from "./index.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_logo}>
        <Logo />
      </div>

      <div className={styles.nav_items}>
        <NavLinks />
      </div>
      <div>
        <div>
          <img src={Cart} alt="cart" />
        </div>
        {/* Login */}
        {/* Sign Up */}
      </div>
    </nav>
  );
};

export default NavBar;
