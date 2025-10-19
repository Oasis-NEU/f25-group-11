//import { useState } from 'react';

export default function Profile() {

//probably would need like a popup for an edit profile where you can these things
//text boxes for each one to put values in
//add a save button which will set each value
//onSubmit event
//<input>

/*
  const [calories, setCalories] = useState("");
  const [goal, setGoal] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");

  const [weeklyCalories, setWeeklyCalories] = useState("");
  const [weeklyGoal, setWeeklyGoal] = useState("");
  const [weeklyProtein, setWeeklyProtein] = useState("");
  const [weeklyFat, setWeeklyFat] = useState("");
  const [weeklyCarbs, setWeeklyCarbs] = useState("");
*/
  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Top Row: Profile Pic, Biography, Today's Progress */}
      <div className="flex flex-wrap items-stretch gap-8">
        {/* Profile Picture - vertically centered */}
        <div className="self-center">
          <img
            className="w-40 h-40 rounded-xl object-cover"
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-1108099.jpg&fm=jpg"
            alt="Profile"
          />
        </div>

        {/* Biography */}
        <div className="flex flex-col flex-1 gap-3 max-w-lg bg-[#D3D3D3] rounded-lg p-4">
          <h1 className="text-3xl font-bold">Name Here</h1>
          <h6 className="text-sm font-normal">Height: 5 foot 11 inches</h6>
          <h6 className="text-sm font-normal">Weight: 175 lbs</h6>
          <h6 className="text-sm font-normal">
            Bio: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </h6>
        </div>

        {/* Today's Progress */}
        <div className="flex flex-col flex-1 gap-3 max-w-lg bg-[#D3D3D3] rounded-lg p-4">
          <h1 className="text-3xl font-bold">Today's Progress</h1>
          <h6 className="text-sm font-normal">Calories: 1,600</h6>
          <h6 className="text-sm font-normal">Goal: 2,000</h6>
          <h6 className="text-sm font-normal">Protein: 10g</h6>
          <h6 className="text-sm font-normal">Fat: 67g</h6>
          <h6 className="text-sm font-normal">Carbs: 41g</h6>
        </div>
      </div>

      {/* Weekly Progress - underneath the top row */}
      <div className="flex flex-col gap-3 max-w-4xl bg-[#D3D3D3] rounded-lg p-4">
        <h1 className="text-3xl font-bold">Weekly Progress</h1>
        <h6 className="text-sm font-normal">Average Calories: 1,600</h6>
        <h6 className="text-sm font-normal">Goal: 14,000</h6>
        <h6 className="text-sm font-normal">Average Protein: 10g</h6>
        <h6 className="text-sm font-normal">Average Fat: 67g</h6>
        <h6 className="text-sm font-normal">Average Carbs: 41g</h6>
      </div>
    </div>
  )
}