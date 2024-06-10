import React, { useState } from 'react';
import logo from "../assets/logo.jpeg";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import bar and close icons

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex z-50 fixed left-1/2 -translate-x-1/2 min-h-20 bg-white rounded-full shadow mt-5 w-[75%] sm:w-[80%] justify-between items-center container py-2 px-4 bg-opacity-50 backdrop-blur-2xl shadow-md">
                <div className="logo font-bold text-2xl">
                    <img src={logo} className='w-16 rounded-full' alt="Logo" />
                </div>
                <nav className="hidden md:flex gap-8 font-semibold text-lg">
                    <ul className="flex gap-8">
                        <li><a href="#Home">الرئيسية</a></li>
                        <li><a href="#About">من نحن</a></li>
                        <li><a href="#Services">خدماتنا</a></li>
                        <li><a href="#Pricing">اسعارنا</a></li>
                        <li><a href="#Contact">اتصل بنا</a></li>
                    </ul>
                </nav>
                <div className="forms hidden md:block">
                    <button className="border border-blue-700 px-4 py-2 rounded-full text-xl font-medium">افتح حساب</button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex mt-[6.1rem]  flex-col items-center bg-white rounded-xl shadow  w-[80%] left-1/2 -translate-x-1/2 py-2 px-4 bg-opacity-50 backdrop-blur-2xl shadow-md fixed z-40" style={{transition:"300ms"}}>
                    <nav className="flex flex-col gap-4 font-semibold text-lg">
                        <ul className="flex flex-col gap-4 items-center">
                            <li><a href="#Home" onClick={toggleMenu}>الرئيسية</a></li>
                            <li><a href="#About" onClick={toggleMenu}>من نحن</a></li>
                            <li><a href="#Services" onClick={toggleMenu}>خدماتنا</a></li>
                            <li><a href="#Pricing" onClick={toggleMenu}>اسعارنا</a></li>
                            <li><a href="#Contact" onClick={toggleMenu}>اتصل بنا</a></li>
                            <li><a href="">+2130674677338</a></li>

                        </ul>
                    </nav>
                    <div className="forms mt-4">
                        <button className="border border-blue-700 px-4 py-2 rounded-full text-xl font-medium">افتح حساب</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
