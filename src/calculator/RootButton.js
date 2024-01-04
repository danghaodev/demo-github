import React from "react";
import calculatorStyles from "./CalculatorStyles.module.css";

const RootButton = ({ showValue, rootHandle }) => {
  return (
    <>
      <button className={calculatorStyles.btn} onClick={rootHandle}>
        {showValue}
      </button>
    </>
  );
};

export default RootButton;
