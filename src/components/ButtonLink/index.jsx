import { Link } from "react-router-dom";
import styles from "./index.module.css";
import PropTypes from "prop-types";

const ButtonLink = ({ path, text, color }) => {
  return (
    <>
      <Link
        className={`${styles.button_link} ${
          color ? styles.button_yellow : styles.button_lemon
        }`}
        to={path}
      >
        {text}
      </Link>
    </>
  );
};

ButtonLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ButtonLink;
