import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosStarOutline, IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="bg-cyan-900 text-center p-5 flex justify-between sticky top-0 z-30 text-white text-sm">
                <NavLink>BoolB&B</NavLink>
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

            {/* <div
                style={{
                    backgroundImage: "url('/images/hero_image.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                className="flex flex-col gap-4 justify-center items-center h-[60vh]  text-white sticky mt-[7vh]"
            >
                <div className="absolute bg-black/50 inset-0 -z-10"></div>

                <div className="text-center">
                    <h1 className="text-3xl">Title casual</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolor, corporis!
                    </p>
                </div>
                <div className="relative z-30">
                  <input
                      type="text"
                      className="border bg-[#fcfcfc] border-slate-400 px-4 py-2 rounded-lg relative z-30"
                      placeholder="ciao"
                  />
                </div>
            </div> */}
        </>
    );
};

export default Header;
