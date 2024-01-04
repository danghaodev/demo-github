import React from "react";
import calculatorStyles from "./CalculatorStyles.module.css";

const DeleteButton = ({ showValue, deleteHandle }) => {
  return (
    <>
      <button className={calculatorStyles.delBtn} onClick={deleteHandle}>
        {showValue}
      </button>
    </>
  );
};

export default DeleteButton;
