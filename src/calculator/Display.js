import React from "react";
import calculatorStyles from "./CalculatorStyles.module.css";

const Display = ({ showValue, answer, typeHandle }) => {
  const onChangeInput = (event) => {
    // const re = /[\d^+-x/().%]+$/;
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      typeHandle(event.target.value);
    }
  };
  return (
    <>
      <input
        type="text"
        name="result"
        className={calculatorStyles.displayResult}
        value={answer}
        disabled
      />
      <input
        type="text"
        name="inputValue"
        className={calculatorStyles.displayInput}
        placeholder="0"
        value={showValue}
        onChange={onChangeInput}
      />
    </>
  );
};

export default Display;
