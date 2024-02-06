import ButtonLink from "../ButtonLink";
import SectionTitle from "../SectionTitle";
import styles from "./index.module.css";

const TopTrainers = () => {
  return (
    <>
      <div className={styles.trainer_heading}>
        <SectionTitle title="TopTrainers" />
        <ButtonLink text="Our Trainers" path="/trainers" />
      </div>
      {/* trainers */}
      <div className={styles.section_banner}></div>
    </>
  );
};

export default TopTrainers;
