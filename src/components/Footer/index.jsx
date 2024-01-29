import Logo from "../Logo";
import styles from "./index.module.css";

const Footer = () => {
  const links = ["home", "programs", "about", "contact", "blog"];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_logo}>
        <Logo />
        <p className={styles.footer_logo_text}>
          Get fit, stay healthy, and live life on their terms without fitness
          being an obstacle.
        </p>
      </div>

      <div className={styles.footer_nav}>
        {links.map((link) => (
          <a key={link} href="/home">
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
