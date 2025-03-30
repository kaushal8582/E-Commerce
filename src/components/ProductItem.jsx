import React, { useContext } from "react";
import cartContext from "../Store/cart-context";

const ProductItem = (props) => {

  const {addDataInCart} =  useContext(cartContext)

  function handleSubmit(){
    let obj ={
      title:props.title,
      img: props.img,
      price: props.price,
      id: Date.now(),
      quantity:1,
    }
    addDataInCart(obj);
  }


  return (
    <div key={Math.random()*Date.now()} className="w-[300px]  p-2 flex  flex-col gap-[10px]">
      <img
        className="w-full h-[300px] overflow-hidden "
        src={props.img}
        alt="productItem"
      />
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <div className="flex w-full items-center justify-between">
        <h3>$ {props.price}</h3>
        <button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
