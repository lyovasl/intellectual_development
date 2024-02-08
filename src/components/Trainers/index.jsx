import { Link } from "react-router-dom";
import styles from "./index.module.css";
import PropTypes from "prop-types";

const Trainers = ({ id, name, company, img }) => {
  return (
    <Link to={`/trainers/${id}`} className={styles.section_trainer}>
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
    </Link>
  );
};

Trainers.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired,
};

export default Trainers;
