import React, { useContext } from "react";
import cartContext from "../Store/cart-context";

const CartComponent = (props) => {

  const {removeDataInCart}  = useContext(cartContext)

  return (
    <div>
      <div className="flex mt-2 items-center justify-between p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
        {/* Image/Title Section */}
        <div className="flex items-center space-x-4 flex-1">
          {
            <img
              src={props.img}
              alt={"nice"}
              className="w-16 h-16 object-cover rounded"
            />
          }
          <h3 className="font-medium text-gray-800 truncate">{props.title}</h3>
        </div>

        {/* Price Section */}
        <div className="font-semibold text-gray-900 w-24 text-right">
          $ {props.price}
        </div>

        {/* Quantity Input */}
        <div className="w-20 mx-4">
          <input
            type="number"
            min="1"
            value={props.quantity}
            // onChange={handleQuantityChange}
            className="w-full px-2 py-1 border rounded text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Remove Button */}
        <button
          onClick={()=>removeDataInCart(props.id)}
          className="ml-2 p-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
