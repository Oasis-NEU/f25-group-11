import React, { useState } from "react";
import graphImage from "../assets/temp-graph.png";
export default function Home() {
    
    const today = new Date();
    // gets the dates for the current week (Sunday to Saturday)
    const getDatesForWeek = () => {
        const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const sunday = new Date(today);
        sunday.setDate(today.getDate() - dayOfWeek); // Go back to Sunday
        
        const week = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(sunday);
            date.setDate(sunday.getDate() + i);
            week.push(date);
        }
        return week;
    };

    // days
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const weekDates = getDatesForWeek();
    const [selectedDay, setSelectedDay] = useState(today.toDateString());

    //hardcoded meal data for the week
    const WEEK_MEALS = {
        'Sun': {
            breakfast: [
                { name: 'Pancakes', calories: 350 },
                { name: 'Maple Syrup', calories: 100 },
                { name: 'Orange Juice', calories: 110 }
            ],
            lunch: [
                { name: 'Caesar Salad', calories: 400 },
                { name: 'Breadsticks', calories: 150 }
            ],
            dinner: [
                { name: 'Steak', calories: 679 },
                { name: 'Mashed Potatoes', calories: 237 },
                { name: 'Green Beans', calories: 44 }
            ]
        },
        'Mon': {
            breakfast: [
                { name: 'Oatmeal', calories: 150 },
                { name: 'Banana', calories: 105 },
                { name: 'Coffee', calories: 5 }
            ],
            lunch: [
                { name: 'Turkey Sandwich', calories: 350 },
                { name: 'Chips', calories: 150 }
            ],
            dinner: [
                { name: 'Pasta', calories: 400 },
                { name: 'Marinara Sauce', calories: 70 },
                { name: 'Garlic Bread', calories: 150 }
            ]
        },
        'Tue': {
            breakfast: [
                { name: 'Toast', calories: 80 },
                { name: 'Scrambled Eggs', calories: 200 },
                { name: 'Coffee', calories: 5 }
            ],
            lunch: [
                { name: 'Tomato Soup', calories: 150 },
                { name: 'Grilled Cheese', calories: 400 }
            ],
            dinner: [
                { name: 'Grilled Chicken', calories: 335 },
                { name: 'Rice', calories: 206 },
                { name: 'Broccoli', calories: 55 }
            ]
        },
        'Wed': {
            breakfast: [
                { name: 'Bacon', calories: 90 },
                { name: 'Coffee', calories: 5 }
            ],
            lunch: [
                { name: 'Chicken Soup', calories: 180 },
                { name: 'Grilled Cheese', calories: 400 }
            ],
            dinner: [
                { name: 'Rice', calories: 206 },
                { name: 'Broccoli', calories: 55 }
            ]
        },
        'Thur': {
            breakfast: [
                { name: 'Cereal', calories: 30 },
                { name: 'Water', calories: 0 }
            ],
            lunch: [
                { name: 'Mac n Cheese', calories: 200 },
                { name: 'Soda', calories: 200 }
            ],
            dinner: [
                { name: 'Grilled Chicken', calories: 335 },
                { name: 'Rice', calories: 206 },
                { name: 'Broccoli', calories: 55 }
            ]
        },
        'Fri': {
            breakfast: [
                { name: 'Toast', calories: 80 },
                { name: 'Coffee', calories: 5 }
            ],
            lunch: [
                { name: 'Tomato Soup', calories: 150 },
            ],
            dinner: [
                { name: 'Grilled Chicken', calories: 335 },
                { name: 'Broccoli', calories: 55 }
            ]
        },
        'Sat': {
            breakfast: [
                { name: 'Oatmeal', calories: 150 },
                { name: 'Banana', calories: 105 },
                { name: 'Coffee', calories: 5 }
            ],
            lunch: [
                { name: 'Caesar Salad', calories: 400 },
                { name: 'Breadsticks', calories: 150 }
            ],
            dinner: [
                { name: 'Pasta', calories: 400 },
                { name: 'Marinara Sauce', calories: 70 },
                { name: 'Garlic Bread', calories: 150 }
            ]
        }, 
    };

    // Get the day of week index from the selected date
    const selectedDate = new Date(selectedDay);
    const selectedDayIndex = selectedDate.getDay(); // 0-6 (Sun-Sat)
    const shortDayName = daysOfWeek[selectedDayIndex];

    // Now use the short day name to get meals
    const dayMeals = selectedDay ? WEEK_MEALS[shortDayName] : null;
    const breakfastData = dayMeals?.breakfast || [];
    const lunchData = dayMeals?.lunch || [];
    const dinnerData = dayMeals?.dinner || [];

    return (
        <div className="flex flex-col gap-6 py-5">
            <div className="flex flex-col md:flex-row justify-center gap-6 px-8">
                <div className="w-full flex flex-col justify-start gap-6">
                    <div className="w-full mx-auto px-4 py-4 sm:px-6 lg:px-8 bg-tea rounded-lg cursor-default shadow-lg">
                        <p className="pb-4">
                            Total calories
                        </p>
                        <img src={graphImage} alt="Temporary Graph" className="w-full"/>
                    </div>
                    <div className=" w-full px-4 py-4 sm:px-6 lg:px-8 bg-tea rounded-lg cursor-default shadow-lg">
                        <div className="flex flex-col">
                            <h4>
                                Week
                            </h4>
                            <div className="flex gap-4">    
                                {weekDates.map((date, index) => (
                                    <div key={date.toDateString()} 
                                    onClick={() => setSelectedDay(date.toDateString())}
                                    className={`w-full px-4 py-6 sm:px-6 lg:px-8 rounded-lg cursor-pointer shadow-lg transition duration-300 ease-in-out
                                        ${selectedDay === date.toDateString() 
                                            ? 'bg-darktea text-white' 
                                            : 'bg-lightertea hover:bg-darktea hover:text-white'
                                        }`}
                                    >    
                                        {daysOfWeek[index]}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {selectedDay ? (<div className="w-full mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-tea rounded-lg cursor-default shadow-lg">
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
                </div>) : null}
            </div>
        </div>
    );
}
