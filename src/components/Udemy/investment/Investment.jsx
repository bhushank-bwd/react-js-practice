import React, { useState } from "react";
import UserInput from "./UserInput";
import Result from "./Result";

const Investment = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 5000,
    expectedReturn: 12,
    duration: 10,
  });
  const isValidInput =
    userInput.duration >= 1 &&
    userInput.initialInvestment >= 1 &&
    userInput.annualInvestment >= 1 &&
    userInput.expectedReturn >= 1;
  const handleChange = (key, value) => {
    setUserInput((prevValues) => {
      return {
        ...prevValues,
        [key]: +value,
      };
    });
  };
  return (
    <div>
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!isValidInput && <>Enter valid inputs</>}
      {isValidInput && <Result userInput={userInput} />}
    </div>
  );
};

export default Investment;
