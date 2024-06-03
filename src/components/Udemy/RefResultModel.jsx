import React, { forwardRef } from "react";

const ResultModel = forwardRef(function ({ result, seconds }, ref) {
  return (
    <dialog
      ref={ref}
      className="w-1/4 h-fit text-center bg-gray-300 p-2 rounded-md"
    >
      <form method="dialog">
        <h2>
          You {result}, {seconds} seconds stop Challenge{" "}
        </h2>
        <button className="bg-red-500 rounded-sm text-white w-fit p-2 m-2">
          Close
        </button>
      </form>
    </dialog>
  );
});

export default ResultModel;
