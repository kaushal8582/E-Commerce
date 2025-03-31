import { useContext, useState } from "react";
import cartContext from "../Store/cart-context";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import CartComponent from "../components/CartComponent";

const Store = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartData, totalBalance } = useContext(cartContext);
  const [isStore, setIsStore] = useState(true);

  const {productsArr} = useContext(cartContext)

  function toggleCartClick() {
    setCartOpen(!cartOpen);
  }

  

  return (
    <div>
      {cartOpen && (
        <div className="fixed top-0  right-0 bg-black pt-[80px] h-screen w-[400px]">
          <h1 className="text-white font-bold text-center">Cart</h1>
          {cartData.map((item) => {
            return (
              <div key={item.id}>
                <CartComponent
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  id={item.id}
                />
              </div>
            );
          })}

          <h2 className="text-white font-bold text-3xl text-end pr-3">
            Total : {totalBalance}
          </h2>
          <div className="flex items-center justify-center mt-4">
            <button className="bg-blue-600 cursor-pointer  hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center space-x-2">
              <span>Purchase</span>
            </button>
          </div>
        </div>
      )}
      <div className=" w-full h-screen">
        <Nav onCartOpen={toggleCartClick} isStore={isStore} />
        <Header />
        <div className="flex gap-[20px] flex-wrap items-center justify-center">
          {productsArr.map((item) => {
            return (
              <ProductItem
                img={item.imageUrl}
                title={item.title}
                price={item.price}
                id ={item.id}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Store;
