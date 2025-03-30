import React, { useState } from "react";
import cartContext from "./cart-context.js";

const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);

  function addDataInCart(item) {
    setTotalBalance((prev)=> prev+item.price);

    let index = cartData.findIndex((proc) => proc.id == item.id);

    if (index!==-1) {
      let tempData =[...cartData];
      tempData[index] = {...tempData[index],quantity:tempData[index].quantity+1};
      setCartData(tempData);
    }else{
      setCartData((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  }

  function removeDataInCart(id) {
    let index = cartData.findIndex((item) => item.id == id);
    let price = cartData[index].price;
    setTotalBalance(totalBalance - price);
    let allValue = cartData.filter((item) => item.id != id);
    setCartData(allValue);
  }

  return (
    <cartContext.Provider
      value={{ cartData, totalBalance, addDataInCart, removeDataInCart }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
