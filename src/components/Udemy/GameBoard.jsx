import React, { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ handleSelectSqure, turns }) => {
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return (
    <ol>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <button
                onClick={() => handleSelectSqure(rowIndex, colIndex)}
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
