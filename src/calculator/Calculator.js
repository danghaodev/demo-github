import React, { useState } from "react";
import Numpad from "./Numpad";
import calculatorStyles from "./CalculatorStyles.module.css";
import Display from "./Display";
import { evaluate, max, round } from "mathjs";

const Calculator = () => {
  const [valueState, setValueState] = useState({ inputValue: "", answer: "" });

  //input value by keyboard
  function typeHandle(e) {
    let val = e.slice(-1);
    if (valueState.answer) {
      setValueState({ inputValue: "", answer: "" });
    }
    //prevent the duplicate of zero at start point (ex: 000...)
    if (valueState.inputValue === "0") {
      if (val === "0") {
        val = "";
      } else if (val !== ".") {
        setValueState({ inputValue: "" });
      }
    }

    //prevent duplicate operation (+,-,*,/,x)
    if (/[+-/x*]/.test(val)) {
      if (/\D$/g.test(valueState.inputValue) || !valueState.inputValue) {
        val = "";
      }
    }

    //input decimal value by keyboard
    if (val === ".") {
      if (!valueState.inputValue) {
        val = "0.";
      } else if (/\D$|\d+[.]\d+$/g.test(valueState.inputValue)) {
        val = "";
      }
    }

    setValueState((prevState) => ({ inputValue: prevState.inputValue + val }));
  }

  //input number value by button
  function inputHandle(event) {
    let val = event.target.innerText;
    if (valueState.answer) {
      setValueState({ inputValue: "", answer: "" });
    }

    //prevent the duplicate of zero at start point (ex: 000...)
    if (valueState.inputValue === "0") {
      if (val === "0") {
        val = "";
      } else {
        setValueState({ inputValue: "" });
      }
    }
    setValueState((prevState) => ({ inputValue: prevState.inputValue + val }));
  }

  //input signal
  function signalHandle(event) {
    let val = event.target.innerText;

    if (val === "log") val = "log(";
    else if (val === "x2") val = "^2";
    else if (val === "x3") val = "^3";

    //prevent the sign located after the another sign
    if (/\D$/g.test(valueState.inputValue)) {
      if (val !== "(") val = "";
    }

    if (valueState.answer) {
      setValueState({ inputValue: "" });
    }
    setValueState((prevState) => ({ inputValue: prevState.inputValue + val }));
  }

  //input operation signal
  function operationHandle(event) {
    let val = event.target.innerText;
    //prevent duplicate operation (+,-,*,/)
    if (/\D$/g.test(valueState.inputValue) || !valueState.inputValue) {
      val = "";
    }

    if (valueState.answer) {
      setValueState((prevState) => ({ inputValue: prevState.answer }));
    }
    setValueState((prevState) => ({ inputValue: prevState.inputValue + val }));
  }

  //delete value
  function deleteHandle(event) {
    let val = event.target.innerText;

    //clear all value
    if (val === "AC") {
      setValueState({ inputValue: "", answer: "" });
    }
    //delete the last character
    else if (val === "C") {
      setValueState((prevState) => ({
        inputValue: prevState.inputValue.slice(0, -1),
      }));
    }
  }

  //input root value
  function rootHandle(event) {
    let val = event.target.innerText;
    // let lastChar = valueState.inputValue.slice(-1);
    if (
      /(\d+[√]$)|(\d+[√.%^]\d+$)|(\d+[√]\d+\D+\d+[√]\d+$)/g.test(
        valueState.inputValue
      )
    ) {
      val = "";
    }

    setValueState((prevState) => ({ inputValue: prevState.inputValue + val }));
  }
  //check balance bracket
  function checkBalanceBracket(exp) {
    let bracket = [];
    for (let i = 0; i < exp.length; i++) {
      if (exp[i] === "(") {
        bracket.push(exp[i]);
      } else if (exp[i] === ")") {
        if (bracket.length === 0) {
          return false;
        } else {
          bracket.pop();
        }
      }
    }
    return bracket.length === 0;
  }

  //input decimal value
  function decimalHandle(event) {
    let val = event.target.innerText;
    if (!valueState.inputValue) {
      val = "0.";
    } else if (/\D$|\d+[.]\d+$/g.test(valueState.inputValue)) {
      val = "";
    }
    setValueState((prevState) => ({ inputValue: prevState.inputValue + val }));
  }

  //change plus minus
  function changeMinusHandle() {
    let val = "-";

    //case 1: all input is number
    let check = /\D/.test(valueState.inputValue);
    if (!check) {
      setValueState((prevState) => ({
        inputValue: val + prevState.inputValue,
      }));
    }

    //case 2: input value ends with operation sign
    else if (/\D$/g.test(valueState.inputValue)) {
      let lastChar = valueState.inputValue.charAt(
        valueState.inputValue.length - 1
      );
      if (lastChar === "+") {
        setValueState((prevState) => ({
          inputValue: prevState.inputValue.slice(0, -1) + val,
        }));
      } else if (lastChar === "-") {
        setValueState((prevState) => ({
          inputValue: prevState.inputValue.slice(0, -1) + "+",
        }));
      } else if (lastChar === "x" || lastChar === "/") {
        setValueState((prevState) => ({
          inputValue: prevState.inputValue + val,
        }));
      }
    }

    //case 3: input value contains number and operation sign
    else if (/\d+[+-x/]\d+/g.test(valueState.inputValue)) {
      let re = ["+", "-", "x", "/"];
      let index = [];
      for (let i = 0; i < re.length; i++) {
        index.push(valueState.inputValue.lastIndexOf(re[i]));
      }
      let lastChar = valueState.inputValue.charAt(max(index));
      // console.log(valueState.inputValue.slice(0, max(index)));
      // console.log(lastChar);
      // console.log(valueState.inputValue.slice(max(index) + 1));
      if (lastChar === "+") {
        val = val + valueState.inputValue.slice(max(index) + 1);
      } else if (lastChar === "-") {
        val = "+" + valueState.inputValue.slice(max(index) + 1);
      } else if (lastChar === "x" || lastChar === "/") {
        val = lastChar + val + valueState.inputValue.slice(max(index) + 1);
      }
      setValueState((prevState) => ({
        inputValue: prevState.inputValue.slice(0, max(index)) + val,
      }));
    }
  }
  //caculating value
  function evaluateHandle() {
    if (!valueState.inputValue || !checkBalanceBracket(valueState.inputValue)) {
      return;
    }

    let finalExpression = valueState.inputValue;

    if (/x/g.test(finalExpression)) {
      finalExpression = finalExpression.replaceAll("x", "*");
    }
    //calculating root
    else if (/[0-9]√[0-9]+/g.test(finalExpression)) {
      let sqrtEvaluate = finalExpression.match(/[0-9]+√[0-9]+/gi);
      let evaluate = finalExpression;
      for (let i = 0; i < sqrtEvaluate.length; i++) {
        let indexRoot = sqrtEvaluate[i].indexOf("√");
        let sqrt = sqrtEvaluate[i]
          .slice(indexRoot + 1)
          .concat(`^(1/${sqrtEvaluate[i].substring(0, indexRoot)})`);
        evaluate = evaluate.replace(sqrtEvaluate[i], sqrt);
      }
      finalExpression = evaluate;
    }
    let result = 0;
    let checkValue = true;
    if (/\D$/g.test(finalExpression)) {
      checkValue = false;
    }
    if (finalExpression.charAt(finalExpression.length - 1) === ")") {
      checkValue = true;
    }
    if (checkValue) {
      result = evaluate(finalExpression);
    } else {
      return;
    }

    setValueState({ inputValue: "", answer: round(result, 3) });
  }

  return (
    <div className={calculatorStyles.container}>
      <Display
        showValue={valueState.inputValue}
        answer={valueState.answer}
        typeHandle={typeHandle}
      />
      <div className={calculatorStyles.numpadContainer}>
        <Numpad
          inputHandle={inputHandle}
          operationHandle={operationHandle}
          signalHandle={signalHandle}
          rootHandle={rootHandle}
          deleteHandle={deleteHandle}
          decimalHandle={decimalHandle}
          changeMinusHandle={changeMinusHandle}
          evaluateHandle={evaluateHandle}
        />
      </div>
    </div>
  );
};

export default Calculator;
