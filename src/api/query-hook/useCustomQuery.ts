import { useQuery } from "react-query";
import { fetchPosts } from "../fetchPosts";

export const useCustomQuery = (key: string) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => fetchPosts(key),
    select: (data) => data.data,
  });
};
