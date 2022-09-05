import { useState, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const StepTracker = () => {
  const [steps, setSteps] = useState(0);

  const increment = () => {
    setSteps((steps) => steps + 1);
  };

  return (
    <div>
      You have taken {steps} step
      <br />
      <button onClick={increment}>I took another step</button>
    </div>
  );
};

function RandomList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 100,
      },
    ]);
  };

  return (
    <>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}

const MultiCounter = () => {
  const [counts, setCounts] = useState({
    countA: 0,
    countB: 0,
  });

  const incA = () => {
    setCounts((counts) => ({
      ...counts,
      countA: counts.countA + 1,
    }));
  };

  const incB = () => {
    setCounts((counts) => ({
      ...counts,
      countB: counts.countB + 1,
    }));
  };

  const badIncA = () =>
    setCounts({
      countA: counts.countA + 1,
    });

  return (
    <>
      <div>A: {counts.countA}</div>
      <div>B: {counts.countB}</div>
      <button onClick={incA}>Increment A</button>
      <button onClick={incB}>Increment B</button>

      <button onClick={badIncA}>Bad Increment B</button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <StepTracker onClick={() => alert("hi")} />
    <RandomList />
    <MultiCounter />
  </StrictMode>
);

reportWebVitals();
