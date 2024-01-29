import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "./index.module.css";

const Main = () => {
  return (
    <>
      <NavBar />

      <div className={styles.main}>
        <p>Main</p>
      </div>

      <Footer />
    </>
  );
};

export default Main;
