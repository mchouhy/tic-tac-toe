import React from "react";
import "../App.css";

const EndGameModal = ({ winner, resetGame }) => {
  const endGameText = winner === false ? "It's a tie!" : `Winner is: ${winner}`;
  return (
    <section className="winner">
      <div>
        <span className="text">
          {endGameText}
          <button className="reset-button" onClick={resetGame}>
            New game
          </button>
        </span>
      </div>
    </section>
  );
};

export default EndGameModal;
