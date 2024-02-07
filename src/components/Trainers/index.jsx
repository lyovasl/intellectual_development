// import TrainerImg from "../../assets/img/trainer_img.webp";
import styles from "./index.module.css";
import PropTypes from "prop-types";

const Trainers = ({ name, company, img }) => {
  return (
    <div className={styles.section_trainer}>
      <div className={styles.section_trainer_img}>
        <img src={img} alt="Trainer" />
      </div>
      <p className={styles.section_trainer_info}>
        <span>Name: </span>
        {name}
      </p>
      <p className={styles.section_trainer_info}>
        <span>GYM: </span> {company}
      </p>
    </div>
  );
};

Trainers.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
};

export default Trainers;
