import React from "react";

const EndGameModal = ({ winner, resetGame }) => {
  const endGameText = winner === false ? "It's a tie!" : `${winner} wins!`;
  return (
    <div>
      <span className="text">
        {endGameText}
        <button className="reset-button" onClick={resetGame}>
          Reset
        </button>
      </span>
    </div>
  );
};

export default EndGameModal;
