import React from "react";
import "../App.css";

const EndGameModal = ({ winner, resetGame }) => {
  const endGameText = winner === false ? "It's a tie!" : `${winner} wins!`;
  return (
    <section className="winner">
      <div>
        <span className="text">
          {endGameText}
          <button className="reset-button" onClick={resetGame}>
            Reset
          </button>
        </span>
      </div>
    </section>
  );
};

export default EndGameModal;
