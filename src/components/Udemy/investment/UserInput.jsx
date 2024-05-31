import React from "react";

const UserInput = ({ userInput, handleChange }) => {
  return (
    <div>
      <div className="grid-col-3">
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={userInput.initialInvestment}
          onChange={(e) => handleChange("initialInvestment", e.target.value)}
        />
      </div>
      <div className="grid-col-3">
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={userInput.annualInvestment}
          onChange={(e) => handleChange("annualInvestment", e.target.value)}
        />
      </div>
      <div className="grid-col-3">
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={userInput.duration}
          onChange={(e) => handleChange("duration", e.target.value)}
        />
      </div>
      <div className="grid-col-3">
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={userInput.expectedReturn}
          onChange={(e) => handleChange("expectedReturn", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserInput;
