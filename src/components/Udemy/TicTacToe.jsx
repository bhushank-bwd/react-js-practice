import React, { useState } from "react";
import GameBoard from "./GameBoard";

const TicTacToe = () => {
  const [gameTurn, setgameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSqure() {
    setActivePlayer((oldActivePlayer) => (oldActivePlayer === "X" ? "O" : "X"));
  }
  return (
    <GameBoard
      handleSelectSqure={handleSelectSqure}
      activePlayer={activePlayer}
    />
  );
};

export default TicTacToe;
