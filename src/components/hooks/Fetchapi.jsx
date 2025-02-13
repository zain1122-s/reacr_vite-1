import { useEffect, useState } from "react";
function PostApiExample() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

  const fetchPosts = () => {
    
    console.log("hi");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res, "res");
        if (!res.ok) {
          throw new Error("failed to fetch!!");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(()=>{
    fetchPosts
  }, [])

  return (
    <>
      <h2>Post API</h2>
      <button onClick={fetchPosts}>Fetch Posts</button>
        {error && <p style={{color: "red"}}>{error}</p>}
      {post.map((items, index) => {
        return(
        <div key={index}>
          <h3>{items.id}</h3>
          <p>{items.body}</p>
        </div>

        )
      })}

    </>
  );
}
export default PostApiExample;