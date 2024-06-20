import axios from "axios";

export const createData = async (url: string, data: object) => {
  return axios.post("https://jsonplaceholder.typicode.com/" + url, data);
};
