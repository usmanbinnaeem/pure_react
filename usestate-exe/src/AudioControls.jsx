import { useState } from "react";

const AudioControls = () => {
//   const [volume, setVolume] = useState(89);
//   const [treble, setTreble] = useState(32);
//   const [mid, setMid] = useState(50);
//   const [bass, setBass] = useState(41);

  const [handleAudio, setHandleAudio] = useState({
    volume: 89,
    bass: 32,
    mid: 50,
    treble: 41,
  });

//   const decrement = (arg) => {
//     switch (arg) {
//       case "volume":
//         return setVolume((volume) => volume - 1);
//       case "treble":
//         return setTreble((treble) => treble - 1);
//       case "mid":
//         return setMid((mid) => mid - 1);
//       case "bass":
//         return setBass((bass) => bass - 1);
//       default:
//         return;
//     }
//   };

const decrement = (arg) => {
    switch (arg) {
      case "volume":
        setHandleAudio((handleAudio) => ({...handleAudio, volume: handleAudio.volume - 1})); 
        break;
      case "treble":
        setHandleAudio((handleAudio) => ({...handleAudio, treble: handleAudio.treble - 1})); 
        break;
      case "mid":
        setHandleAudio((handleAudio) => ({...handleAudio, mid: handleAudio.mid - 1})); 
        break;
      case "bass":
        setHandleAudio((handleAudio) => ({...handleAudio, bass: handleAudio.bass - 1})); 
        break;
      default:
        return;
    }
  };


//   const increment = (arg) => {
//     switch (arg) {
//       case "volume":
//         return setVolume((volume) => volume + 1);
//       case "treble":
//         return setTreble((treble) => treble + 1);
//       case "mid":
//         return setMid((mid) => mid + 1);
//       case "bass":
//         return setBass((bass) => bass + 1);
//       default:
//         return;
//     }
//   };

const increment = (arg) => {
    switch (arg) {
      case "volume":
        setHandleAudio((handleAudio) => ({...handleAudio, volume: handleAudio.volume + 1})); 
        break;
      case "treble":
        setHandleAudio((handleAudio) => ({...handleAudio, treble: handleAudio.treble + 1})); 
        break;
      case "mid":
        setHandleAudio((handleAudio) => ({...handleAudio, mid: handleAudio.mid + 1})); 
        break;
      case "bass":
        setHandleAudio((handleAudio) => ({...handleAudio, bass: handleAudio.bass + 1})); 
        break;
      default:
        return;
    }
  };

  return (
    <center>
      <div>
        <span
          onClick={() => decrement("volume")}
          style={{
            border: "2px solid black",
            cursor: "pointer",
            margin: "5px",
            padding: "0px 4px 0px 4px",
          }}
        >
          -
        </span>
        {handleAudio.volume}
        <span
          onClick={() => increment("volume")}
          style={{
            border: "2px solid black",
            cursor: "pointer",
            margin: "5px",
            padding: "0px 4px 0px 4px",
          }}
        >
          +
        </span>
      </div>
      <br />
      <div>
        <span
          onClick={() => decrement("treble")}
          style={{
            border: "2px solid black",
            cursor: "pointer",
            margin: "5px",
            padding: "0px 4px 0px 4px",
          }}
        >
          -
        </span>
        {handleAudio.treble}
        <span
          onClick={() => increment("treble")}
          style={{
            border: "2px solid black",
            cursor: "pointer",
            margin: "5px",
            padding: "0px 4px 0px 4px",
          }}
        >
          +
        </span>
      </div>
      <br />
      <div>
        <span
          onClick={() => decrement("mid")}
          style={{
            border: "2px solid black",
            cursor: "pointer",
            margin: "5px",
            padding: "0px 4px 0px 4px",
          }}
        >
          -
        </span>
        {handleAudio.mid}
        <span
          onClick={() => increment("mid")}
          style={{
            border: "2px solid black",
            cursor: "pointer",
            margin: "5px",
            padding: "0px 4px 0px 4px",
          }}
        >
          +
        </span>
      </div>
      <br />
      <div>
        <span
          onClick={() => decrement("bass")}
          style={{
            border: "2px solid black",
            cursor: "pointer",
            margin: "5px",
            padding: "0px 4px 0px 4px",
          }}
        >
          -
        </span>
        {handleAudio.bass}
        <span
          onClick={() => increment("bass")}
          style={{
            border: "2px solid black",
            cursor: "pointer",
            margin: "5px",
            padding: "0px 4px 0px 4px",
          }}
        >
          +
        </span>
      </div>
    </center>
  );
};

export default AudioControls;
