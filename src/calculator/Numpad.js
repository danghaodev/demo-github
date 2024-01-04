import React from "react";
import DeleteButton from "./DeleteButton";
import SignButton from "./SignButton";
import InputButton from "./InputButton";
import EqualButton from "./EqualButton";
import DecimalButton from "./DecimalButton";
import OperationButton from "./OperationButton";
import ChangePlusMinusButton from "./ChangePlusMinusButton";
import RootButton from "./RootButton";

const Numpad = ({
  inputHandle,
  operationHandle,
  signalHandle,
  rootHandle,
  deleteHandle,
  decimalHandle,
  changeMinusHandle,
  evaluateHandle,
}) => {
  return (
    <>
      <SignButton showValue={"("} signalHandle={signalHandle} />
      <SignButton showValue={")"} signalHandle={signalHandle} />
      <ChangePlusMinusButton
        showValue={"±"}
        changeMinusHandle={changeMinusHandle}
      />
      <DeleteButton showValue={"C"} deleteHandle={deleteHandle} />
      <DeleteButton showValue={"AC"} deleteHandle={deleteHandle} />

      <RootButton showValue={[<sup>2</sup>, "√"]} rootHandle={rootHandle} />
      <RootButton showValue={[<sup>3</sup>, "√"]} rootHandle={rootHandle} />
      <RootButton showValue={"√"} rootHandle={rootHandle} />
      <OperationButton showValue={"x"} operationHandle={operationHandle} />
      <OperationButton showValue={"/"} operationHandle={operationHandle} />

      <SignButton showValue={["x", <sup>2</sup>]} signalHandle={signalHandle} />
      <SignButton showValue={["x", <sup>3</sup>]} signalHandle={signalHandle} />
      <SignButton showValue={"^"} signalHandle={signalHandle} />

      <OperationButton showValue={"+"} operationHandle={operationHandle} />
      <OperationButton showValue={"-"} operationHandle={operationHandle} />

      <InputButton showValue={5} inputHandle={inputHandle} />
      <InputButton showValue={6} inputHandle={inputHandle} />
      <InputButton showValue={7} inputHandle={inputHandle} />
      <InputButton showValue={8} inputHandle={inputHandle} />
      <InputButton showValue={9} inputHandle={inputHandle} />

      <InputButton showValue={0} inputHandle={inputHandle} />
      <InputButton showValue={1} inputHandle={inputHandle} />
      <InputButton showValue={2} inputHandle={inputHandle} />
      <InputButton showValue={3} inputHandle={inputHandle} />
      <InputButton showValue={4} inputHandle={inputHandle} />

      <SignButton showValue={"log"} signalHandle={signalHandle} />
      <DecimalButton showValue={"."} decimalHandle={decimalHandle} />
      <OperationButton showValue={"%"} operationHandle={operationHandle} />
      <div style={{ gridColumn: "4/span 2" }}>
        <EqualButton showValue={"="} evaluateHandle={evaluateHandle} />
      </div>
    </>
  );
};

export default Numpad;
