import { useEffect } from "react";
import useGetTrainers from "../../hooks/useGetTrainers";
import ButtonLink from "../ButtonLink";
import SectionTitle from "../SectionTitle";
import TrainerImg from "../../assets/img/trainer_img.webp";
import styles from "./index.module.css";
import Trainers from "../Trainers";

const TopTrainers = () => {
  const { trainers, getData } = useGetTrainers();

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.trainer_heading}>
        <SectionTitle title="TopTrainers" />
        <ButtonLink text="Our Trainers" path="/trainers" />
      </div>
      {/* trainers */}
      {/* //todo create trainers Page */}
      <div className={styles.section_banner}>
        {trainers.map((trainer, id) => (
          <Trainers
            id={id}
            key={id}
            img={TrainerImg}
            name={trainer.name}
            company={trainer.company.name}
          />
        ))}
      </div>
    </>
  );
};

export default TopTrainers;
