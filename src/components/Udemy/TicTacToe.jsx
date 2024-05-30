import React, { useState } from "react";
import GameBoard from "./GameBoard";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import Result from "./Result";
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const TicTacToe = () => {
  // learn lift state

  const [gameTurn, setgameTurn] = useState([]);
  let gameBoard = [...INITIAL_GAME_BOARD.map((arr) => [...arr])];
  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
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
  let winner;
  let hasdraw = !winner && gameTurn.length == 9;
  for (const wc of WINNING_COMBINATIONS) {
    let firstLetter = gameBoard[wc[0].row][wc[0].column];
    let secondLetter = gameBoard[wc[1].row][wc[1].column];
    let thirdLetter = gameBoard[wc[2].row][wc[2].column];
    if (
      firstLetter &&
      firstLetter == secondLetter &&
      firstLetter == thirdLetter
    ) {
      winner = firstLetter;
    }
  }
  const restartMatch = () => {
    setgameTurn([]);
  };
  return (
    <>
      <GameBoard handleSelectSqure={handleSelectSqure} board={gameBoard} />
      {(winner || hasdraw) && <Result winner={winner} restart={restartMatch} />}
    </>
  );
};

export default TicTacToe;
