import { useState } from "react";

const RandomList = () => {
  const [numbers, setNumbers] = useState([]);

  const generateRandomNumber = () => {
    const random = Math.floor(1 + Math.random() * 20);

    setNumbers((numbers) => [...numbers, random]);
  };

  return (
    <>
      <center>
        <button onClick={generateRandomNumber}>Add Random Number</button>
        <ul>
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </center>
    </>
  );
};

export default RandomList;
