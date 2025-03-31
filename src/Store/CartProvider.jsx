import React, { useState } from "react";
import cartContext from "./cart-context.js";

const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      id: 1,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        id:2,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        id:3,
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        id:4,
    },
  ];

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
      value={{ cartData, totalBalance, addDataInCart, removeDataInCart,productsArr }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
