import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center p-4">
      <div>
        <p>Project work made with React+Tailwind</p>
        <div className="flex flex-row justify-center space-x-4 pt-2">
          <a
            href="https://github.com/Simone-Fratini"
            target="_blank"
            className="text-blue-200 hover:underline"
          >
            Simone Fratini
          </a>
          <a
            href="https://github.com/Aj-Herrera-99"
            target="_blank"
            className="text-blue-200 hover:underline"
          >
            Ajhay Herrera
          </a>
          <a
            href="https://github.com/AndySMT"
            target="_blank"
            className="text-blue-200 hover:underline"
          >
            Andy Simota
          </a>
          <a href="" target="_blank" className="text-blue-200 hover:underline">
            Orsuane Elaouizeb
          </a>
          <a
            href="https://github.com/aandrea-boatoo"
            target="_blank"
            className="text-blue-200 hover:underline"
          >
            Fabio Doria
          </a>
        </div>
      </div>
      <div className="container mx-auto pt-3">
        <p className="text-sm">
          &copy; 2025 Boolean BoolBnB. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
