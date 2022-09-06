import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "off":
      return 0;
    case "advanced":
      return (state + 1) % 4;

    default:
      return state;
  }
};


const checkLightLevel = (arg) => {
  switch (arg) {
    case 0:
      return "Off";
    case 1:
      return "Week";
    case 2:
      return "Fair";
    case 3:
      return "Good";
    default:
      return "broken";
  }
};

const Room = () => {
  const [lightLevel, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>Light is {checkLightLevel(lightLevel)}</div>
      <button
        onClick={() =>
          dispatch({
            type: "advanced",
          })
        }
      >
        Check Light Level
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "off",
          })
        }
      >
        Off
      </button>
    </>
  );
};

export default Room;
