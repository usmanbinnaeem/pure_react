import { useState } from "react";

const Room = () => {
  const [toggleLight, setToggleLight] = useState(false);

  return (
    <>
      <center>
        <h3>The Room is {toggleLight ? "Lit" : "Dark"}</h3>
        <button
          onClick={() => {
            setToggleLight(!toggleLight);
          }}
        >
          Switch Light
        </button>
      </center>
    </>
  );
};

export default Room;
