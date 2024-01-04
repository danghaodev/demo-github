import React from "react";
import Cell from "./Cell";
import tictactoeStyles from "./TictactoeStyles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addValue, reset, selectValue } from "../redux/tictactoeSlice";
import Button from "react-bootstrap/Button";

const BoardRedux = () => {
  const board = useSelector(selectValue);
  const dispatch = useDispatch();
  function clickHandle(i) {
    if (board[i] || winner) {
      return;
    } else {
      dispatch(addValue(i));
    }
  }

  function checkWinner() {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }
  const winner = checkWinner();
  return (
    <div className={tictactoeStyles.boardContainer}>
      <p className="fs-1">Tic Tac Toe using Redux</p>
      <div className={tictactoeStyles.boardCell3x3}>
        {board.map((item, index) => (
          <Cell
            key={index}
            displayValue={item}
            clickHandle={() => clickHandle(index)}
          />
        ))}
      </div>
      <Button
        className="mt-2"
        style={{ width: "250px", height: "70px", fontSize: "30px" }}
        onClick={() => dispatch(reset())}
      >
        Clear board
      </Button>
    </div>
  );
};

export default BoardRedux;
