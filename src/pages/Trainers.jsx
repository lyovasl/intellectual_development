import { useParams } from "react-router";
import useGetTrainers from "../hooks/useGetTrainers";
import { useEffect } from "react";

const Trainers = () => {
  const { id } = useParams();
  const { singleTrainer, getSingleTrainer } = useGetTrainers();

  useEffect(() => {
    getSingleTrainer(id);
  }, [getSingleTrainer, id]);

  if (!singleTrainer) return <p>Loading...</p>;

  return (
    <div
      style={{
        width: "550px",
        padding: "10px 5px",
        borderRadius: "10px",
        color: "green",
        fontSize: "22px",
        margin: "40px auto 20px",
        background: "#6a9cfd",
      }}
    >
      <h1 style={{ margin: "0 0 10px 0" }}>Trainers Bio</h1>
      <div style={{ fontWeight: "bold", fontSize: "14px", color: "black" }}>
        <p style={{ margin: "0" }}>
          Name:&nbsp;
          <span style={{ color: "green" }}> {singleTrainer?.data.name}</span>
        </p>
        <p>
          UserName:&nbsp;
          <span style={{ color: "green" }}>{singleTrainer?.data.username}</span>
        </p>
        <p>
          City:&nbsp;
          <span style={{ color: "green" }}>
            {singleTrainer?.data.address.city}
          </span>
        </p>
        <p>
          Email:&nbsp;
          <a
            style={{ color: "green" }}
            href={`mailto:${singleTrainer?.data.email}`}
          >
            {singleTrainer?.data.email}
          </a>
        </p>
        <p>
          Phone:&nbsp;
          <a
            style={{ color: "green" }}
            href={`tel:${singleTrainer?.data.phone}`}
          >
            {singleTrainer?.data.phone}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Trainers;
