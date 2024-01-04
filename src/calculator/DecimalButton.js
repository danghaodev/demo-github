import React from "react";
import calculatorStyles from "./CalculatorStyles.module.css";

const DecimalButton = ({ showValue, decimalHandle }) => {
  return (
    <>
      <button className={calculatorStyles.btn} onClick={decimalHandle}>
        {showValue}
      </button>
    </>
  );
};

export default DecimalButton;
