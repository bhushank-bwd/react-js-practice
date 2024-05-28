import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const TicTacToe = () => {
  const [gameBoard, setgameBoard] = useState(initialGameBoard);
  const handleClick = (rowIndex, colIndex) => {
    setgameBoard((oldArray) => {
      let tempArr = [...oldArray.map((innerArray) => [...innerArray])];
      tempArr[rowIndex][colIndex] = "X";
      return tempArr;
    });
  };
  return (
    <ol>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <button
                onClick={() => handleClick(rowIndex, colIndex)}
                className="border-2 border-red-800 bg-red-600 w-24 h-24 m-2 rounded-sm text-white text-lg p-2"
                key={colIndex}
              >
                {col}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default TicTacToe;
