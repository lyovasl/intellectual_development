import ButtonLink from "../ButtonLink";
import styles from "./index.module.css";
import Banner from "../../assets/img/banner.png";

const SecondaryBanner = () => {
  return (
    <div className={styles.section_banner}>
      <div className={styles.section_banner_text}>
        <h4 className={styles.section_banner_title}>
          Forge Your Fitness Future: Join Us Today
        </h4>

        <ButtonLink color text="See more" path="/about" />
      </div>

      <div className={styles.section_banner_img}>
        <img src={Banner} alt="Fitnes" />
      </div>
    </div>
  );
};

export default SecondaryBanner;
