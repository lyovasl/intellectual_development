import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "./index.module.css";

const Main = ({ children }) => {
  return (
    <>
      <NavBar />

      <div className={styles.main}>{children} </div>

      <Footer />
    </>
  );
};

export default Main;
