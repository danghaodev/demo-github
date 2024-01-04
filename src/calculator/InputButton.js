import React from "react";
import calculatorStyles from "./CalculatorStyles.module.css";

const InputButton = ({ showValue, inputHandle }) => {
  return (
    <>
      <button className={calculatorStyles.btn} onClick={inputHandle}>
        {showValue}
      </button>
    </>
  );
};

export default InputButton;
