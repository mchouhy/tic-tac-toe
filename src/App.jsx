/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { useState } from "react";
import Square from "./components/Square";
import { TURNS } from "./utils/constants";
import confetti from "canvas-confetti";
import { checkWinner } from "./utils/logic";
import Board from "./components/Board";
import EndGameModal from "./components/EndGameModal";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newWinner = checkWinner(newBoard);
    if (newWinner) confetti();
    setWinner(newWinner);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <>
      <main className="App">
        <h1>Tic Tac Toe</h1>
        <section className="game">
          <Board board={board} updateBoard={updateBoard} />
        </section>
        <section className="turn-container">
          <Square isSelected={turn === TURNS.X} className={"turn-square"}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O} className={"turn-square"}>
            {TURNS.O}
          </Square>
        </section>
        {winner !== null && (
          <EndGameModal winner={winner} resetGame={resetGame} />
        )}
      </main>
    </>
  );
}

export default App;
