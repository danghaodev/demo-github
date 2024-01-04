import React, { useState } from "react";
import Cell from "./Cell";
import tictactoeStyles from "./TictactoeStyles.module.css";
import { Button } from "react-bootstrap";

const Board = () => {
  const [board, setBoard] = useState(new Array(25).fill(null));
  const [xNext, setXNext] = useState(false);

  function clickHandle(i) {
    const cell = [...board];
    if (cell[i] || winner) {
      return;
    }
    xNext ? (cell[i] = "O") : (cell[i] = "X");
    setBoard(cell);
    setXNext(!xNext);
  }

  function calculateWinner(board) {
    const lines = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d, e] = lines[i];
      if (
        board[a] === board[b] &&
        board[a] === board[c] &&
        board[a] === board[d] &&
        board[a] === board[e]
      ) {
        return board[a];
      }
    }
    return null;
  }

  function resetGame() {
    setBoard(new Array(25).fill(null));
    setXNext(false);
  }
  const winner = calculateWinner(board);
  return (
    <div className={tictactoeStyles.boardContainer}>
      <p className="fs-1">Tic Tac Toe using useState</p>
      {winner ? (
        <p className={tictactoeStyles.boardText}>
          Winner is
          {winner === "X" ? (
            <strong className={tictactoeStyles.Xvalue}>{winner}</strong>
          ) : (
            <strong className={tictactoeStyles.Ovalue}>{winner}</strong>
          )}
        </p>
      ) : (
        <p className={tictactoeStyles.boardText}>
          Next player is{" "}
          {!xNext ? (
            <strong className={tictactoeStyles.Xvalue}> X</strong>
          ) : (
            <strong className={tictactoeStyles.Ovalue}> O</strong>
          )}
        </p>
      )}
      <div className={tictactoeStyles.boardCell5x5}>
        {board.map((item, index) => (
          <Cell
            key={index}
            displayValue={item}
            clickHandle={() => clickHandle(index)}
          />
        ))}
      </div>
      <Button className="fs-2 mt-2" onClick={() => resetGame()}>
        Reset Game
      </Button>
    </div>
  );
};

export default Board;
