/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { useState } from "react";
import Square from "./components/Square";
import { TURNS } from "./utils/constants";
import confetti from "canvas-confetti";
import { checkWinner } from "./utils/logic";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    // Handle turns
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // Handle board selections
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // Check for winner
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
          <section className="winner">
            <div>
              <span className="text">
                {winner === false ? "It's a tie!" : `${winner} wins!`}
                <button className="reset-button" onClick={resetGame}>
                  Reset
                </button>
              </span>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
