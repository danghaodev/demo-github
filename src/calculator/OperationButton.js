import React from "react";
import calculatorStyles from "./CalculatorStyles.module.css";

const OperationButton = ({ showValue, operationHandle }) => {
  return (
    <>
      <button className={calculatorStyles.btn} onClick={operationHandle}>
        {showValue}
      </button>
    </>
  );
};

export default OperationButton;
