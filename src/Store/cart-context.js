import React from "react";

const cartContext = React.createContext({
  cartData: [],
  totalBalance: 0,
  addDataInCart: () => {},
  removeDataInCart: () => {},
});

export default cartContext;
