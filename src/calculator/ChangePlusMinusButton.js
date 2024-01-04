import React from "react";
import calculatorStyles from "./CalculatorStyles.module.css";

const ChangePlusMinusButton = ({ showValue, changeMinusHandle }) => {
  return (
    <>
      <button className={calculatorStyles.btn} onClick={changeMinusHandle}>
        {showValue}
      </button>
    </>
  );
};

export default ChangePlusMinusButton;
