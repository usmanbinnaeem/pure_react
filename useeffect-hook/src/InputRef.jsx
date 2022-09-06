import { useEffect, useState, useRef } from "react";
function App() {
  // Store a reference to the input's DOM node
  const inputRef = useRef();
  // Store the input's value in state
  const [value, setValue] = useState("");
  useEffect(() => {
  document.title = value;
  }, [value]);
  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default App;
