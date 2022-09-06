import { useState } from "react";
import Reddit from "./Reddit";
// function App() {
//   // Store a reference to the input's DOM node
//   const inputRef = useRef();
//   // Store the input's value in state
//   const [value, setValue] = useState("");
//   useEffect(() => {
//   document.title = value;
//   }, [value]);
//   return (
//     <input
//       ref={inputRef}
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//     />
//   );
// }

// export default App;

function App() {
  const [inputValue, setValue] = useState("reactjs");
  const [subreddit, setSubreddit] = useState(inputValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(inputValue);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e) => setValue(e.target.value)} />
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
}
export default App;
