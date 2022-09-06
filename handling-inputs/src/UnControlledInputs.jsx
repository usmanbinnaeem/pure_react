import { useRef, useState } from "react";

const UnControlledInputs = () => {
  const fref = useRef();
  const lref = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    setFirstName(fref.current.value);
    setLastName(lref.current.value);
  };

  return (
    <>
      <div>
        <input name="firstname" type="text" ref={fref} />
      </div>

      <div>
        <input name="lastName" type="text" ref={lref} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div>
        Hi {firstName} {lastName}
      </div>
    </>
  );
};

export default UnControlledInputs;
