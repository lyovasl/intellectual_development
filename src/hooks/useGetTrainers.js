import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const useGetTrainers = () => {
  axios.get(BASE_URL).then((data) => console.log({ data }));
};

export default useGetTrainers;
