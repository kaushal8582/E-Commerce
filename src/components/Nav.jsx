import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className=" relative flex items-center justify-center text-white gap-20 bg-black w-full py-4 border-b-2 border-white">
      <Link to={"/"} className="text-[15px]" href="">
        Home
      </Link>
      <Link to={"/store"} className="text-[15px]">
        Store
      </Link>
      <Link to={"/about"} className="text-[15px]">
        About
      </Link>
      <Link to={"/contact"} className="text-[15px]">
        Contact Us
      </Link>

      {props.isStore && (
        <div
          onClick={() => props.onCartOpen()}
          className=" cursor-pointer absolute right-2 "
        >
          <Cart />
        </div>
      )}
    </div>
  );
};

export default Nav;
