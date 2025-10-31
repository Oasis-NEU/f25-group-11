import React, { useState } from "react";
import graphImage from '../assets/temp-graph.png';
export default function Home() {
    return (
        <div className="flex flex-col gap-6 py-6">
            <div className="flex flex-col md:flex-row justify-center gap-6 px-8">
                <div className="w-full flex flex-col justify-start gap-6">
                    <div className="w-full mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-tea rounded-lg cursor-default shadow-lg">
                        <p className="pb-6">
                            Total calories
                        </p>
                        <img src={graphImage} alt="Temporary Graph" className="w-full"/>
                    </div>
                    <div className=" w-full px-4 py-6 sm:px-6 lg:px-8 bg-tea rounded-lg cursor-default shadow-lg">
                        <div className="flex flex-col">
                            <h4>
                                Week
                            </h4>
                            <div className="flex gap-6">
                                <div className="w-full px-4 py-8 sm:px-6 lg:px-8 bg-lightertea rounded-lg cursor-pointer shadow-lg" >
                                Sun
                                </div>
                                <div className="w-full px-4 py-8 sm:px-6 lg:px-8 bg-lightertea rounded-lg cursor-pointer shadow-lg" >
                                    Mon
                                </div>
                                <div className="w-full px-4 py-8 sm:px-6 lg:px-8 bg-lightertea rounded-lg cursor-pointer shadow-lg" >
                                    Tue
                                </div>
                                <div className="w-full px-4 py-8 sm:px-6 lg:px-8 bg-lightertea rounded-lg cursor-pointer shadow-lg" >
                                    Wed
                                </div>
                                <div className="w-full px-4 py-8 sm:px-6 lg:px-8 bg-lightertea rounded-lg cursor-pointer shadow-lg" >
                                    Thur
                                </div>
                                <div className="w-full px-4 py-8 sm:px-6 lg:px-8 bg-lightertea rounded-lg cursor-pointer shadow-lg" >
                                    Fri
                                </div>
                                <div className="w-full px-4 py-8 sm:px-6 lg:px-8 bg-lightertea rounded-lg cursor-pointer shadow-lg" >
                                    Sat
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className ="w-full mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-tea rounded-lg cursor-default shadow-lg">
                    mealplan section
                </div>
            </div>
        </div>
        
    )
}