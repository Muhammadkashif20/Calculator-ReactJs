// src/CalculatorUI.jsx
import React, { useState } from "react";
const spCharacters = ["C", "Del", "%", "/"];
const num_Operators = [
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
];
const CalculatorUI = () => {
  const [inputValue, setValue] = useState("");
  const handleAnswer = () => {
    setValue(eval(inputValue));
  };
  const handleCalculation = (e) => {
    const setCalculateValue = e.target.innerText;
    if (setCalculateValue === "C") {
      setValue("");
      return;
    } else if (setCalculateValue === "Del") {
      setValue((PreviousValue) => PreviousValue.slice(0, -1));
      return;
    } else {
      setValue((PreviousValue) => PreviousValue + setCalculateValue);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300 text-gray-800">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        {/* Display Section */}
        <div className="mb-4 p-4 bg-gray-50 rounded-md shadow-inner text-right">
          <input
            type="text"
            placeholder="0"
            className="bg-transparent text-3xl font-light w-full text-right text-gray-700 outline-none"
            readOnly
            value={inputValue}
          />
        </div>
        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-2">
          {/* Top Control Buttons */}
          {spCharacters.map((symbol) => (
            <button
              key={symbol}
              onClick={handleCalculation}
              className="bg-gray-200 rounded-md text-lg py-2 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
            >
              {symbol}
            </button>
          ))}

          {/* Number and Operation Buttons */}
          {num_Operators.map((symbol) => (
            <button
              key={symbol}
              onClick={handleCalculation}
              className="bg-gray-100 rounded-md text-lg py-2 hover:bg-gray-200 active:bg-gray-300 transition duration-200"
            >
              {symbol}
            </button>
          ))}
          {/* Bottom Row */}
          <button
            className="col-span-2 bg-gray-100 rounded-md text-lg py-2 hover:bg-gray-200 active:bg-gray-300 transition duration-200"
            onClick={handleCalculation}
          >
            0
          </button>
          <button
            className="bg-gray-100 rounded-md text-lg py-2 hover:bg-gray-200 active:bg-gray-300 transition duration-200"
            onClick={handleCalculation}
          >
            .
          </button>
          <button
            className="bg-blue-500 text-white rounded-md text-lg py-2 hover:bg-blue-600 active:bg-blue-700 transition duration-200"
            onClick={handleAnswer}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorUI;
