import { useContext } from "react";
import { DisplayContext } from "../context/displayContext";
import {
  add,
  sub,
  mul,
  div,
  formatResult,
  operate,
} from "../library/functions";

export default function Numpad() {
  ////////////////////CONSTANTS////////////////////////////
  const buttons = [7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "/", 0, "."];
  const operators = ["+", "-", "*", "/"];
  const {
    setDisplayValue,
    displayValue,
    firstNum,
    setFirstNum,
    secondNum,
    setSecondNum,
    operator,
    setOperator,
  } = useContext(DisplayContext);

  ////////////////////FUNCTIONS////////////////////////////
  function btnfunc(btn) {
    setDisplayValue(displayValue + btn);
    if (btn == "=" && operator !== "" && secondNum !== "") {
      test();
    } else if (btn == "=" && secondNum == "") {
      setDisplayValue(firstNum);
      setOperator("");
    } else {
      if (operators.includes(btn)) {
        setOperator(btn);
        const length = displayValue.length;
        if (operators.includes(displayValue[length - 1])) {
          setDisplayValue(displayValue.slice(0, -1) + btn);
        } else {
          setDisplayValue(displayValue + btn);
        }
      } else if (operator !== "") {
        const t = displayValue + btn;
        const temp = t.split(operator);
        setSecondNum(temp[1]);
      } else {
        setFirstNum(displayValue + btn);
      }
    }
  }

  function test() {
    const value = operate(operator, firstNum, secondNum);
    console.log(operator);
    setDisplayValue(value);
    setFirstNum(value);
    setOperator("");
    setSecondNum("");
  }

  function clear() {
    setDisplayValue("");
    setFirstNum("");
    setSecondNum("");
    setOperator("");
  }

  ////////////////////////////////////

  return (
    <div className="bg-zinc-900 rounded-lg flex-[7_7_0%] grid grid-cols-4 gap-2 p-4 text-white items-center">
      <button
        className="py-3 px-3 rounded-md bg-red-500 text-2xl font-bold col-span-4 hover:bg-red-700"
        onClick={() => clear()}
      >
        CLEAR
      </button>

      {buttons.map((btn) => (
        <button
          key={btn}
          className="py-3 px-3 rounded-full bg-zinc-700 text-[#ecd5b4] text-2xl font-bold aspect-square hover:bg-zinc-800 flex justify-center items-center"
          onClick={() => {
            btnfunc(btn);
          }}
        >
          {btn}
        </button>
      ))}
      <button
        className="py-3 px-3 rounded-full bg-[#dbb175] text-zinc-700 text-2xl font-bold aspect-square hover:bg-[#f0b159] hover:text-zinc-900 hover:scale-[101%] hover:duration-200 hover:ease-out duration-100 ease-in flex justify-center items-center"
        onClick={() => {
          btnfunc("=");
        }}
      >
        =
      </button>
    </div>
  );
}
