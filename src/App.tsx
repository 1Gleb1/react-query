import "./App.css";
import { useCustomMutation } from "./api/query-hook/useCustomMutation";
import { useCustomQuery } from "./api/query-hook/useCustomQuery";

interface Post {
  userId: number;
  id: number;
  title: string;
}

function App() {
  const { data: posts } = useCustomQuery("posts");
  const mutation = useCustomMutation("posts");

  return (
    <>
      <button
        onClick={() => mutation.mutate({ useId: 1, id: 1, title: "title" })}
      >
        Create Post
      </button>
      {posts?.map((post: Post) => (
        <div key={post.id} style={{ display: "flex", gap: "20px" }}>
          <h4>{post.id}</h4>
          <h5>{post.userId}</h5>
          <p>{post.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;
