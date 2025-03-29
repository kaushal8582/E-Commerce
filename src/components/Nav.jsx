import React from "react";
import Cart from "./Cart";

const Nav = () => {
  return (
    <div className=" relative flex items-center justify-center text-white gap-20 bg-black w-full py-4 border-b-2 border-white">
      <a className="text-[15px]" href="">
        Home
      </a>
      <a className="text-[15px]" href="">
        Store
      </a>
      <a className="text-[15px]" href="">
        About
      </a>

      <div className="absolute right-2 " >
        <Cart />
      </div>
    </div>
  );
};

export default Nav;
