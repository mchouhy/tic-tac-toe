import React from "react";
import Square from "./Square";

const Board = ({ board, updateBoard }) => {
  return (
    <div className="board">
      {board.map((square, index) => (
        <Square
          key={index}
          index={index}
          className={"square"}
          updateBoard={updateBoard}
        >
          {square}
        </Square>
      ))}
    </div>
  );
};

export default Board;
