import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(function ({ result, seconds }, ref) {
  let dialogRef = useRef(null); // use own ref
  useImperativeHandle(ref, () => {
    // only follow return object properties can acces by ref props of forwardRef
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  return (
    <dialog
      ref={dialogRef}
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
