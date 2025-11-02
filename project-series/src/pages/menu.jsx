import React, { useState } from 'react';
// import FoodItem from './components/fooditem.jsx';
// import NavBar from './components/navbar.jsx';

export default function MenuPage() {

    // 1 = breakfast, 2 = lunch, 3 = dinner
    const [mealPeriod, setMealPeriod] = useState('1')

    const steastMenu = [
        'Poop',
        'Toilet Soup',
        'Dirt',
        "ryan chang is delicious"
    ];

    const IVMenu = [
        'Pasta',
        'Pizza',
        'Lamb Curry',
        "kevin wang is a snack"
    ];

    // const handleClick = (event) => console.log(event)

    const [steastOpen, openSteast] = useState(false)
    const [IVOpen, openIV] = useState(false)

    return (
        <div className="flex flex-row h-full">
            <div className="w-2/5 flex flex-col gap-6 py-6 m-4">
                <h1 onClick={() => openSteast(!steastOpen)} className="w-full px-5 py-5 w-50 bg-tea rounded-lg">
                    Steast
                </h1>

                <div className={`
                    px-5 py-5 bg-tea rounded-lg
                    transition-all duration-500
                    ${steastOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}>
                    {steastMenu.map((food) => (
                        <div key={food} className="px-5 py-5 my-5 bg-egg brightness-90 rounded-lg shadow-lg">
                            {food}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-2/5 flex flex-col gap-6 py-6 m-4">
                <h1 onClick={() => openIV(!IVOpen)} className="w-full px-5 py-5 w-50 bg-tea rounded-lg">
                    International Village
                </h1>

                <div className={`
                    px-5 py-5 bg-tea rounded-lg
                    transition-all duration-500
                    ${IVOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}>
                    {IVMenu.map((food) => (
                        <div key={food} className="px-5 py-5 my-5 bg-egg brightness-90 rounded-lg shadow-lg">
                            {food}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-1/5 h-full flex flex-col gap-6 py-6">
                <div className="w-full h-full px-5 py-5 bg-tea">
                    <h2 className="text-center">
                        Meal Period
                        (these should be selectable)
                    </h2>

                    <div className="px-5 py-5 my-5 bg-egg brightness-90 rounded-lg shadow-lg">
                        breakfast
                    </div>
                    <div className="px-5 py-5 my-5 bg-egg brightness-90 rounded-lg shadow-lg">
                        lunch
                    </div>
                    <div className="px-5 py-5 my-5 bg-egg brightness-90 rounded-lg shadow-lg">
                        dinner
                    </div>
                </div>
            </div>
        </div>
    )
}