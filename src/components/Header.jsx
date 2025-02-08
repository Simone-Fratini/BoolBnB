import React from "react";
import { Link } from "react-router-dom";
import { FaSearchLocation } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="bg-white text-center p-4 flex justify-between fixed top-0 w-screen z-20 shadow-lg shadow-slate-400">
        <div>
          <Link to="/">
            <img
              src="/bed-and-breakfast.png"
              alt="logo"
              className="w-12 h-12"
            />
          </Link>
        </div>
        <div className="relative">
          <FaSearchLocation className="absolute right-3 top-5 -translate-y-1/2 text-gray-500 text-xl z-2313123" />
          <input
            type="text"
            className="border bg-[#fcfcfc] border-slate-400 px-4 py-2 rounded-lg relative z-30 w-100"
          />
        </div>
        <div>login</div>
      </header>
      <div
        style={{
          backgroundImage: "url('/images/hero_image.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="flex flex-col gap-4 justify-center items-center h-[60vh]  text-white sticky mt-[7vh]"
      >
        {/* overlay */}
        <div className="absolute bg-black/50 inset-0 -z-10"></div>

        <div className="text-center">
          <h1 className="text-3xl">Title casual</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
            corporis!
          </p>
        </div>
        <div className="relative z-30">
          <input
            type="text"
            className="border bg-[#fcfcfc] border-slate-400 px-4 py-2 rounded-lg relative z-30"
            placeholder="ciao"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
