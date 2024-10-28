// src/CalculatorUI.jsx
import React, { useState } from "react";

const CalculatorUI = () => {
  const [inputValue,setValue]=useState('0')
  const handleAnswer=(e)=>{
    // console.log(e.target.value);
    console.log(inputValue);
    setValue(inputValue)
    }
   
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
            onChange={()=>setValue(e.target.value)}
          />
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-2">
          
          {/* Top Control Buttons */}
          {["C", "±", "%", "÷"].map((symbol) => (
            <button
              key={symbol}
              onClick={handleAnswer}
              className="bg-gray-200 rounded-md text-lg py-2 hover:bg-gray-300 active:bg-gray-400 transition duration-200"
            >
              {symbol}
              
            </button>
          ))}

          {/* Number and Operation Buttons */}
          {["7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+"].map(
            (symbol) => (
              <button
                key={symbol}
              onClick={handleAnswer}
                
                className="bg-gray-100 rounded-md text-lg py-2 hover:bg-gray-200 active:bg-gray-300 transition duration-200"
              >
                {symbol}
              </button>
            )
          )}

          {/* Bottom Row */}
          <button className="col-span-2 bg-gray-100 rounded-md text-lg py-2 hover:bg-gray-200 active:bg-gray-300 transition duration-200"
              onClick={handleAnswer}
          
          >
            0
          </button>
          <button className="bg-gray-100 rounded-md text-lg py-2 hover:bg-gray-200 active:bg-gray-300 transition duration-200"
              onClick={handleAnswer}
          
          >
            .
          </button>
          <button className="bg-blue-500 text-white rounded-md text-lg py-2 hover:bg-blue-600 active:bg-blue-700 transition duration-200"
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
