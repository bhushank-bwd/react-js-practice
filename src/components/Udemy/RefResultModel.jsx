import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(function (
  { onReset, timeRemaining, seconds },
  ref
) {
  let dialogRef = useRef(null); // use own ref
  useImperativeHandle(ref, () => {
    // only follow return object properties can acces by ref props of forwardRef
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  const userLost = timeRemaining <= 0;
  const wonBy = (timeRemaining / 1000).toFixed(2);
  return (
    // onReset in dialog will work on esc key
    <dialog
      ref={dialogRef}
      className="w-1/4 h-fit text-center bg-gray-300 p-2 rounded-md"
      onReset={onReset}
    >
      <form method="dialog">
        {!userLost && (
          <h2>
            You won, {seconds} seconds stop challenge by time remaining {wonBy}
          </h2>
        )}
        {userLost && (
          <h2>You lost, {seconds} seconds stop Challenge by time expire</h2>
        )}
        <button
          className="bg-red-500 rounded-sm text-white w-fit p-2 m-2"
          onSubmit={onReset}
        >
          Close
        </button>
      </form>
    </dialog>
  );
});

export default ResultModel;
