import PropTypes from "prop-types";
import styles from "./index.module.css";

const BenefitsItems = ({ item }) => {
  return (
    <div className={styles.items}>
      <div>
        <img src={item.icon} alt="Icon" />
      </div>
      <div>
        <h4 className={styles.items_title}>{item.title}</h4>
        <p className={styles.items_text}>{item.text}</p>
      </div>
    </div>
  );
};

BenefitsItems.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
  }).isRequired,
};

export default BenefitsItems;
