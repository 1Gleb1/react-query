import { useMutation } from "react-query";
import { createData } from "../createPosts";

export const useCustomMutation = (url: string) => {
  const mutation = useMutation((newData: object) => createData(url, newData));
  return mutation;
};
