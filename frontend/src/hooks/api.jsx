import axios from "axios";

let URL = "http://localhost:5000/api/v1/task/random";

export const getRandomTask = async () => {
  return await axios.get(URL);
};

export const generateTodos = async () => {
  return await axios.post(URL + "/add");
};
