import { Link } from "react-router-dom";
import styles from "./index.module.css";
import PropTypes from "prop-types";

const ButtonLink = ({ path, text }) => {
  return (
    <>
      <Link className={styles.button_link} to={path}>
        {text}
      </Link>
    </>
  );
};

ButtonLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonLink;
