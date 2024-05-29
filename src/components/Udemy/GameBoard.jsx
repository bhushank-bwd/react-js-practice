import React, { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ handleSelectSqure, activePlayer }) => {
  const [gameBoard, setgameBoard] = useState(initialGameBoard);

  const handleClick = (rowIndex, colIndex) => {
    // one way
    setgameBoard((oldArray) => {
      let tempArr = [...oldArray.map((innerArray) => [...innerArray])];
      tempArr[rowIndex][colIndex] = activePlayer;
      return tempArr;
    });
    handleSelectSqure();
  };
  return (
    <ol>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <button
                // disabled={col}
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

export default GameBoard;
