import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMutation, useQuery } from "react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function App() {
  const useCustomMutation = (url: string) => {
    const mutation = useMutation((postData: Post) =>
      axios.post("https://jsonplaceholder.typicode.com/" + url, postData)
    );
    return mutation;
  };

  const useCustomQuery = (url: string) => {
    return useQuery({
      queryKey: [url],
      queryFn: async () => {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/" + url
        );
        return data;
      },
    });
  };

  const mutation = useCustomMutation("posts");
  const { data } = useCustomQuery("posts");

  console.log(mutation.mutate({ userId: 1, id: 1, title: "foo", body: "bar" }));
  console.log(data);

  return <></>;
}

export default App;
