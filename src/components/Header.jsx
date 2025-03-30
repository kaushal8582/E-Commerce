import React from "react";
import { FaPlay } from "react-icons/fa"; // Import the play icon from Font Awesome

const Header = (props) => {
  return (
    <div className=" gap-3 w-full flex-col text-white flex items-center justify-center py-5 bg-gray-600">
      <h1 className="text-[100px] md:text-[100px] font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Easy Shop
      </h1>
      {props.isHome && (
        <div className="flex flex-col items-center justify-center gap-3">
          <button className="border-2 border-sky-300 p-2 text-2xl">
            Get Our Latest Album
          </button>
          <div className=" flex items-center justify-center h-[80px] w-[80px] border-2 rounded-full p-4 border-sky-400">
            <FaPlay className="inline-block mr-2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
