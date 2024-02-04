import FitnesImage from "../../assets/svg/fitnes_bg.png";
import styles from "./index.module.css";
import ButtonLink from "../ButtonLink";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_text}>
        <h1 className={styles.banner_title}>
          For Your Health and Fitness Goals in No Time
        </h1>
        <p className={styles.banner_subtitle}>
          It doesnt matter if your goal is to get stronger, burn fat, or to just
          stay fit our world class coaches will guide you every step of the way.
        </p>

        <ButtonLink text="See more" path="/about" />
      </div>

      <div className={styles.banner_img}>
        <img src={FitnesImage} alt="Fitnes" />
      </div>
    </div>
  );
};

export default Banner;
