import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosStarOutline, IoMdHeartEmpty, IoMdSearch, IoMdAddCircleOutline } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";



const Header = () => {

    return (
        <>
            <header className="hidden sm:flex bg-linear-90/oklch drop-shadow-lg from-[#d4c685] to-[#a7d3a6] text-center p-5 lg:px-8 justify-between sticky top-[-1px] z-30 text-stone-800 text-sm">
                <Link to="/">
                    <img
                        src="/bed-and-breakfast.png"
                        alt="logo"
                        className="w-10 h-10"
                    />
                </Link>
                <NavLink className="flex items-center gap-1">
                    <IoIosStarOutline className="text-xl" />
                    <span>Rent with BoolB&B</span>
                </NavLink>
            </header>

            {/* navbar mobile*/}
            <nav className="bg-[#fcfcfc] bottom-[-1px] w-screen py-3 border-t-2 rounded-2xl border-t-stone-300 z-10 fixed grid grid-cols-3 md:hidden">
                <NavLink to="/search" className={({isActive}) => "flex justify-center items-center  flex-col " + (isActive ? "text-red-500" : "")}>
                    <IoMdSearch className="text-2xl" />
                    <span className="capitalize text-sm">explore</span>
                </NavLink>
                <NavLink to="/" className={({isActive}) => "flex justify-center items-center  flex-col " + (isActive ? "text-red-500" : "")}>

                    <AiFillHome className="text-2xl" />

                    <span className="capitalize text-sm">Home</span>
                </NavLink>
                <NavLink to="/addproperty" className={({isActive}) => "flex justify-center items-center  flex-col " + (isActive ? "text-red-500" : "")}>
                    <IoMdAddCircleOutline className="text-2xl" />
                    <span className="capitalize text-sm">add property</span>
                </NavLink>
            </nav>
        </>
    );
};

export default Header;
