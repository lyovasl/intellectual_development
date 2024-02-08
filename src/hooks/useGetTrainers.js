import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const useGetTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [singleTrainer, setSingleTrainer] = useState(null);

  const getData = () => {
    axios
      .get(BASE_URL, {
        params: {
          product_tags: "ecocert",
        },
      })
      .then(({ data }) => setTrainers(data));
  };

  const getSingleTrainer = (id) => {
    axios.get(`${BASE_URL}/${id}`).then((data) => setSingleTrainer(data));
  };

  return {
    trainers,
    getData,
    singleTrainer,
    getSingleTrainer,
  };
};

export default useGetTrainers;
