import axios from "axios";

export const fetchPosts = async (url: string) => {
  return axios.get(`https://jsonplaceholder.typicode.com/` + url);
};
