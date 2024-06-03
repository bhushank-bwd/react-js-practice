import React, { useRef, useState } from "react";
import RefResultModel from "./RefResultModel";

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
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  let refTimer = useRef(null); // so we used ref in Watch
  const startTimer = () => {
    refTimer.current = setTimeout(() => {
      setTimerExpired(true);
      console.log("seconds", seconds);
    }, seconds * 1000);
    setTimerStarted(true);
  };
  const stopTimer = () => {
    clearTimeout(refTimer.current);
  };
  return (
    <>
      {timerExpired && <RefResultModel result={`lost`} seconds={seconds} />}
      <div className="bg-amber-100 md:bg-amber-300 p-2 text-center">
        <h2>{title}</h2>
        <h2>{timerExpired && "You Lost"}</h2>
        <button
          className="bg-green-400 text-white text-lg w-fit rounded-md p-2 m-1"
          onClick={timerStarted ? stopTimer : startTimer}
        >
          {timerStarted ? "Stop timer" : "Start Timer"}
        </button>
      </div>
    </>
  );
};

export default RefTimer;
