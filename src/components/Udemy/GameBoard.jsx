import React, { useState } from "react";

const GameBoard = ({ handleSelectSqure, board }) => {
  return (
    <ol>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerValue, colIndex) => (
              <button
                disabled={playerValue !== null}
                onClick={() => handleSelectSqure(rowIndex, colIndex)}
                className={`border-2 border-red-800 bg-red-600 w-24 h-24 m-2 rounded-sm text-white text-lg p-2 ${
                  playerValue !== null ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                key={colIndex}
              >
                {playerValue}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
