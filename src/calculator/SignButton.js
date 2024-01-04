import React from "react";
import calculatorStyles from "./CalculatorStyles.module.css";

const SignButton = ({ showValue, signalHandle }) => {
  return (
    <>
      <button className={calculatorStyles.btn} onClick={signalHandle}>
        {showValue}
      </button>
    </>
  );
};

export default SignButton;
