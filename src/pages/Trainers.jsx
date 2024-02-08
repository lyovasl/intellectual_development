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

      <p style={{ margin: "0" }}>
        <span style={{ fontSize: "14px", color: "black", fontWeight: "bold" }}>
          Name:&nbsp;
        </span>
        {singleTrainer?.data.name}
      </p>
      <p style={{ margin: "0" }}>
        <span style={{ fontSize: "14px", color: "black", fontWeight: "bold" }}>
          UserName:&nbsp;
        </span>
        {singleTrainer?.data.username}
      </p>
      <p style={{ margin: "0" }}>
        <span style={{ fontSize: "14px", color: "black", fontWeight: "bold" }}>
          Email:&nbsp;
        </span>
        {singleTrainer?.data.email}
      </p>
      <p style={{ margin: "0" }}>
        <span style={{ fontSize: "14px", color: "black", fontWeight: "bold" }}>
          City:&nbsp;
        </span>
        {singleTrainer?.data.address.city}
      </p>
      <p style={{ margin: "0" }}>
        <span style={{ fontSize: "14px", color: "black", fontWeight: "bold" }}>
          Phone:&nbsp;
        </span>
        {singleTrainer?.data.phone}
      </p>
    </div>
  );
};

export default Trainers;
