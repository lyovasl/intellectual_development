import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const useGetTrainers = () => {
  const [trainers, setTrainers] = useState([]);

  const getData = () => {
    axios
      .get(BASE_URL, {
        params: {
          product_tags: "ecocert",
        },
      })
      .then(({ data }) => setTrainers(data));
  };

  return {
    trainers,
    getData,
  };
};

export default useGetTrainers;
