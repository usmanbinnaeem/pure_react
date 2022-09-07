import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const RoomContext = React.createContext();

function RoomStore({ children }) {
  const [isLit, setLit] = useState(false);
  const toggleLight = () => {
    setLit(!isLit);
  };

  return (
    <RoomContext.Provider
      value={{
        isLit,
        onToggleLight: toggleLight,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

const Room = () => {
  const { isLit, onToggleLight } = useContext(RoomContext);
  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      The room is {isLit ? "lit" : "dark"}.
      <br />
      <button onClick={onToggleLight}>Flip</button>
    </div>
  );
};

const App = () => <Room />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RoomStore>
      <App />
    </RoomStore>
    ,
  </React.StrictMode>
);
