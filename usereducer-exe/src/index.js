import { useReducer, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ShoppingList from './ShoppingList';
import Room from './Room';

const Counter = () => {
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);


  return (
    <>
      {sum}
      <button onClick={() => {dispatch(2)}}>Add 1</button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Counter />
    <ShoppingList />
    <hr />
    <Room />
  </StrictMode>
);
