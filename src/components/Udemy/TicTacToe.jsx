import React, { useState } from "react";
import GameBoard from "./GameBoard";

const TicTacToe = () => {
  // learn lift state

  const [gameTurn, setgameTurn] = useState([]);
  function handleSelectSqure(rowIndex, colIndex) {
    setgameTurn((oldTurn) => {
      let turnn = "X";
      if (oldTurn.length > 0 && oldTurn[0]["player"] === "X") {
        turnn = "O";
      }
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: turnn },
        ...oldTurn,
      ];
      return updatedTurn;
    });
  }
  return <GameBoard handleSelectSqure={handleSelectSqure} turns={gameTurn} />;
};

export default TicTacToe;
