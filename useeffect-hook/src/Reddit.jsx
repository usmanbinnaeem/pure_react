import { useState, useEffect } from "react";

function Reddit({ subreddit }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null)
  useEffect(() => {
    // Fetch the data when the component mounts
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => res.json())
      .then((json) =>
        // Save the posts into state
        setPosts(json.data.children.map((c) => c.data))
      )
      .catch((error) => setError(error.message))
  }, [subreddit, setPosts]);
  return (
    <>
    <ul>
      {!error && posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
      {error && <h1>Error Accured</h1>}
    </ul>
    </>
  );
}

export default Reddit;
