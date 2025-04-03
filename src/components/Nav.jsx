import React, { useContext } from "react";
import Cart from "./Cart";
import { Link, useNavigate } from "react-router-dom";
import mycontext from "../Store/Auth-context";

const Nav = (props) => {
  const ctx = useContext(mycontext);
  const navigate = useNavigate();

  function logout() {
    ctx.logout();
    navigate("/login");
  }

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
      {!ctx.isLogin && (
        <Link to={"/login"} className="text-[15px]">
          Login
        </Link>
      )}

      {props.isStore && (
        <div
          onClick={() => props.onCartOpen()}
          className=" cursor-pointer absolute right-2 "
        >
          <Cart />
        </div>
      )}
      <button
        onClick={logout}
        className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Nav;
