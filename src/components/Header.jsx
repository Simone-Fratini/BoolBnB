import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosStarOutline, IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    const [property, setProperty] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:3000/properties/1")
            .then((res) => setProperty(res.data));
    }, []);

    return (
        <>
            {property && (
                <div className="w-[400px] aspect-square">
                    <img
                        src={`http://localhost:3000/images/${property.id}${property?.img_endpoints[0]}`}
                        alt=""
                    />
                </div>
            )}
            <header className="hidden sm:flex bg-cyan-900 text-center p-5 justify-between sticky top-[-1px] z-30 text-white text-sm">
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
            <nav className="bg-[#fcfcfc] bottom-0 w-screen py-3 border-t-2 border-t-stone-300 z-10 fixed grid grid-cols-3">
                <NavLink className="flex justify-center items-center  flex-col">
                    <IoMdSearch className="text-2xl" />
                    <span className="capitalize text-sm">explore</span>
                </NavLink>
                <NavLink className="flex justify-center items-center  flex-col">
                    <IoMdHeartEmpty className="text-2xl" />
                    <span className="capitalize text-sm">favourites</span>
                </NavLink>
                <NavLink className="flex justify-center items-center  flex-col">
                    <FaRegUserCircle className="text-2xl" />
                    <span className="capitalize text-sm">login</span>
                </NavLink>
            </nav>
        </>
    );
};

export default Header;
