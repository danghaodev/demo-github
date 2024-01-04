import React from "react";
import tictactoeStyles from "./TictactoeStyles.module.css";
import Button from "react-bootstrap/Button";

const Cell = ({ displayValue, clickHandle }) => {
  return (
    <>
      <Button
        variant="secondary"
        className={tictactoeStyles.btn}
        onClick={clickHandle}
      >
        {displayValue === "X" ? (
          <span className={tictactoeStyles.Xvalue}>{displayValue}</span>
        ) : (
          <span className={tictactoeStyles.Ovalue}>{displayValue}</span>
        )}
      </Button>
    </>
  );
};

export default Cell;
