import PaymentsIcon from "../../assets/svg/payments.png";
import ResultsIcon from "../../assets/svg/results.png";
import GuaranteeIcon from "../../assets/svg/guarantee.png";
import BenefitsItems from "../BenefitsItems";
import styles from "./index.module.css";

const Benefits = () => {
  const benefits = [
    {
      title: "Payments",
      text: " Our payment system is accessible 24/7, allowing you to manage your transactions seamlessly from the comfort of your home or on the go.",
      icon: PaymentsIcon,
    },
    {
      title: "Results",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit expedita incidunt inventore doloribus libero voluptatum. Fugit, at eum.",
      icon: ResultsIcon,
    },
    {
      title: "Guarantee",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id fugiat nobis? Culpa, rerum!",
      icon: GuaranteeIcon,
    },
  ];

  return (
    <div className={styles.benefits}>
      {benefits.map((item) => (
        <BenefitsItems key={item} item={item} />
      ))}
    </div>
  );
};

export default Benefits;
