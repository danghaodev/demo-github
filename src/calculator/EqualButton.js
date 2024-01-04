import React from "react";
import calculatorStyles from "./CalculatorStyles.module.css";

const EqualButton = ({ showValue, evaluateHandle }) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalButton").click();
    }
  });
  return (
    <>
      <button
        className={calculatorStyles.equalBtn}
        id="equalButton"
        onClick={evaluateHandle}
      >
        {showValue}
      </button>
    </>
  );
};

export default EqualButton;
