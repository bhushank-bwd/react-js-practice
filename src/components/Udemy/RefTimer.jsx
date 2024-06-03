import React, { useRef, useState } from "react";
import RefResultModel from "./RefResultModel";
import ResultModel from "./RefResultModel";

const RefTimer = () => {
  return (
    <>
      <h1 className="text-center p-2 m-2 text-xl font-bold">Ref Timer</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-11 grid-cols-3 gap-4">
        <Watch title={`1 seconds Challenge`} seconds={1} />
        <Watch title={`5 seconds Challenge`} seconds={5} />
        <Watch title={`10 seconds Challenge`} seconds={10} />
        <Watch title={`14 seconds Challenge`} seconds={15} />
      </div>
    </>
  );
};
// const refTimer;//if we used this then all instance of watch will use same variable
export const Watch = ({ title, seconds }) => {
  let refTimer = useRef(null); // so we used ref in Watch
  let dialog = useRef(null); // so we used ref in Watch

  const [timeRemaining, setTimeRemaining] = useState(seconds * 1000);
  const isTimerActive = timeRemaining > 0 && timeRemaining < seconds * 1000;

  if (timeRemaining <= 0) {
    clearInterval(refTimer.current);
    dialog.current.open();
  }
  const onReset = () => {
    setTimeRemaining(seconds * 1000);
  };

  const startTimer = () => {
    refTimer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };
  const stopTimer = () => {
    clearInterval(refTimer.current);
    dialog.current.open();
  };
  return (
    <>
      <div className="bg-amber-100 md:bg-amber-300 p-2 text-center">
        <h2>{title}</h2>
        <button
          className="bg-green-400 text-white text-lg w-fit rounded-md p-2 m-1"
          onClick={isTimerActive ? stopTimer : startTimer}
        >
          {isTimerActive ? "Stop timer" : "Start Timer"}
        </button>
      </div>
      <ResultModel
        ref={dialog}
        seconds={seconds}
        timeRemaining={timeRemaining}
        onReset={onReset}
      />
    </>
  );
};

export default RefTimer;
