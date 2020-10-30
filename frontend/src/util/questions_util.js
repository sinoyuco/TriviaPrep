import axios from "axios";

export const getQuestions = () => {
  return axios.get("http://localhost:5000/api/questions");
};