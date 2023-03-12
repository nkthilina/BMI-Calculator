import React, { useState } from "react";

function App() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!age || !gender || !height || !weight) {
  //     alert('Please fill out all required fields.');
  //     return;
  //   }
  //   const heightInMeters = height / 100;
  //   const bmiValue = weight / (heightInMeters * heightInMeters);
  //   setBmiResult(bmiValue.toFixed(2));

  //   if (bmiValue < 18.5) {
  //     setStatus('Underweight');
  //   } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
  //     setStatus('Normal weight');
  //   } else if (bmiValue >= 25 && bmiValue <= 29.9) {
  //     setStatus('Overweight');
  //   } else {
  //     setStatus('Obese');
  //   }
  // };

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else if (bmi >= 30 && bmi < 34.9) return "Obese";
    else return "EXtremely Obese";
  }

  return (
    <div className="container">
      <form className="box">
        <div>
          <h1>BMI Calculator</h1>
        </div>
        <div className="content">
          <div className="input">
            <label>Age</label>
            <input
              type="number"
              className="text-input"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)} required 
            />
          </div>
          <div className="gender">
            <label className="container">
              <input type="radio" name="radio" id="m" />
              <p className="text">Male</p>
              <span className="checkmark"></span>
            </label>

            <label className="container">
              <input type="radio" name="radio" id="f" />
              <p className="text">Female</p>
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="containerHW">
            <div className="inputHeight">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Height(cm)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="inputWeight">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Weight(kg)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="Weight(kg)"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="calculate">
            <button
              className="calculateButton"
              type="button"
              onClick={calculateBMI}
            >
              Calculate BMI
            </button>
          </div>
        </div>
        {bmiResult && (
          <div className="result">
            <p>Your BMI is </p>
            <div id="result">{bmiResult}</div>
            <div className="comment">
              {" "}
              You are <span id="output">{status}</span>{" "}
            </div>
            {/* <p className="comment">You are : {status}</p> */}
          </div>
        )}
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Fit2Planet. All rights reserved.
        </p>
      </form>
    </div>
  );
}

export default App;
