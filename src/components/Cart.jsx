import React, { useContext } from "react";
import cartContext from "../Store/cart-context";

const Cart = () => {
  const { cartData } = useContext(cartContext);
  return (
    <div className="border-2 border-sky-400 px-2 py-1 rounded-[10px]">
      Cart <span className="text-sky-400">{cartData.length}</span>{" "}
    </div>
  );
};

export default Cart;
