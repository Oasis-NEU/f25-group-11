import React, { useState } from "react";
import graphImage from "../assets/temp-graph.png";
export default function Home() {
  const [breakfastData, setBreakfastData] = useState([
    { id: 1, name: "eggs", calories: 50 },
    { id: 2, name: "pancakes", calories: 100 },
    { id: 3, name: "bacon", calories: 200 },
  ]);
  const [lunchData, setLunchData] = useState([
    { id: 1, name: "salad", calories: 50 },
    { id: 2, name: "sandwich", calories: 100 },
    { id: 3, name: "pasta", calories: 200 },
  ]);
  const [dinnerData, setDinnerData] = useState([
    { id: 1, name: "ice cream sandwiches", calories: 50 },
    { id: 2, name: "peas", calories: 100 },
    { id: 3, name: "chicken", calories: 200 },
  ]);
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex flex-col md:flex-row justify-center gap-6 px-8">
        <div className="w-full flex flex-col justify-start gap-6">
          <div className="w-full mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-tea rounded-lg cursor-default shadow-lg">
            <p className="pb-6">Total calories</p>
            <img src={graphImage} alt="Temporary Graph" className="w-full" />
          </div>
          <div className="w-full px-4 py-12 sm:px-6 lg:px-8 bg-tea rounded-lg cursor-default shadow-lg">
            week
          </div>
        </div>

        <div className="w-full mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-tea rounded-lg cursor-default shadow-lg">
          <h1>Daily plan</h1>
          <div>
            <h4>Breakfast</h4>
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th className="w-2/3 text-left">Name:</th>
                  <th className="w-1/3 text-right">Calories:</th>
                </tr>
              </thead>
              <tbody>
                {breakfastData.map((item, index) => (
                  <tr key={index}>
                    <td className="text-left">{item.name}</td>
                    <td className="text-right">{item.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4>Lunch</h4>
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th className="w-2/3 text-left">Name:</th>
                  <th className="w-1/3 text-right">Calories:</th>
                </tr>
              </thead>
              <tbody>
                {lunchData.map((item, index) => (
                  <tr key={index}>
                    <td className="text-left">{item.name}</td>
                    <td className="text-right">{item.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4>Dinner</h4>
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th className="w-2/3 text-left">Name:</th>
                  <th className="w-1/3 text-right">Calories:</th>
                </tr>
              </thead>
              <tbody>
                {dinnerData.map((item, index) => (
                  <tr key={index}>
                    <td className="text-left">{item.name}</td>
                    <td className="text-right">{item.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4>Total</h4>
            

          </div>
        </div>
      </div>
    </div>
  );
}
