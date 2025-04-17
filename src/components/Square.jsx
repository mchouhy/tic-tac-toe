import React from "react";
import "../App.css";
import PropTypes from "prop-types";

Square.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  updateBoard: PropTypes.func,
  className: PropTypes.string,
};

function Square({ index, children, isSelected, updateBoard, className }) {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div
      key={index}
      className={`${className} ${isSelected ? "is-selected" : ""}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

export default Square;
