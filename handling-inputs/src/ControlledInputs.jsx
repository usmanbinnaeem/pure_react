import { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <>
      <div>
        <input
          name="firstname"
          type="text"
          value={firstName}
          onChange={(e) => handleFirstName(e)}
        />
      </div>

      <div>
        <input
          name="lastName"
          type="text"
          value={lastName}
          onChange={(e) => handleLastName(e)}
        />
      </div>
      

      <div>
        Hi {firstName} {lastName}
      </div>
    </>
  );
};

export default ControlledInputs;
