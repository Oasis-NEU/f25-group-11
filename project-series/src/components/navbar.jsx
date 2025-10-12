import React from "react";
import {useState} from React;
import {Menu, X} from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-yellow-200 text-white shadow-lg">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center ">
                    <h1>text</h1>
                </div>
            </div>
        </nav>
    );
}