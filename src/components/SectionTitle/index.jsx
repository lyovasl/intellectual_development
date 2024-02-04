import styles from "./index.module.css";
import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return <h3 className={styles.title}>{title}</h3>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
