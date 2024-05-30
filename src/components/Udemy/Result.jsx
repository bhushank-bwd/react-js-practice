import React from "react";

const Result = ({ winner, restart }) => {
  return (
    <div>
      {winner ? <>Winner is {winner}</> : "Match drawn"}

      <button
        onClick={restart}
        className="border-2 border-red-800 bg-red-700 text-md rounded-sm text-white w-40 p-1 ms-1"
      >
        Restart Match
      </button>
    </div>
  );
};

export default Result;
