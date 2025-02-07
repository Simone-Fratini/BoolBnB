import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="text-white text-center p-4 bg-red-300 flex justify-between fixed w-screen">
                <div>icona</div>
                <div></div>
                <div>login</div>
            </header>
            <div className="flex flex-col gap-4 justify-center items-center h-[60vh] bg-red-200">
              <div className="text-center">
                <h1 className="text-3xl">Title casual</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, corporis!</p>
              </div>
                <input
                    type="text"
                    className="border bg-[#fcfcfc] border-slate-400 px-4 py-2 rounded-lg sticky top-[10px]"
                    placeholder="ciao"
                />
            </div>
        </>
    );
};

export default Header;
