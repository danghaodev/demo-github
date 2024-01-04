import React, { useReducer } from "react";
import tictactoeStyles from "./TictactoeStyles.module.css";
import Cell from "./Cell";
import { Button } from "react-bootstrap";

const BoardUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    displayValue: new Array(9).fill(null),
    xNext: false,
  });

  function reducer(state, action) {
    switch (action.type) {
      case "add": {
        const cell = [...state.displayValue];
        state.xNext ? (cell[action.index] = "X") : (cell[action.index] = "O");
        return {
          ...state,
          displayValue: cell,
          xNext: !state.xNext,
        };
      }
      case "reset":
        return {
          ...state,
          displayValue: new Array(9).fill(null),
          xNext: false,
        };
      default:
        return state;
    }
  }

  function clickHandle(i) {
    dispatch({
      type: "add",
      index: i,
    });
  }
  function reset() {
    dispatch({ type: "reset" });
  }

  return (
    <div className={tictactoeStyles.boardContainer}>
      <p className="fs-1">Tic Tac Toe using useReducer</p>
      <div className={tictactoeStyles.boardCell3x3}>
        {state.displayValue.map((item, index) => (
          <Cell
            key={index}
            displayValue={item}
            clickHandle={() => clickHandle(index)}
          />
        ))}
      </div>
      <Button className="fs-2 mt-2" onClick={() => reset()}>
        RESET
      </Button>
    </div>
  );
};
export default BoardUseReducer;
