import CartComponent from "./components/CartComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ProductItem from "./components/ProductItem";

function App() {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  return (
    <div>
      <div className="fixed top-0  right-0 bg-black pt-[80px] h-screen w-[400px]">
        <h1 className="text-white font-bold text-center">Cart</h1>
        
        {cartElements.map((item) => {
          return (
            <div key={Math.random()*Date.now()}  >
              <CartComponent
                img={item.imageUrl}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            </div>
          );
        })}

        <h2 className="text-white font-bold text-3xl text-end pr-3">
          Total : 800
        </h2>
        <div className="flex items-center justify-center mt-4">
          <button className="bg-blue-600 cursor-pointer  hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center space-x-2">
            <span>Purchase</span>
          </button>
        </div>
      </div>
      <div className=" w-full h-screen">
        <Nav />
        <Header />
        <div className="flex gap-[20px] flex-wrap items-center justify-center">
          {productsArr.map((item) => {
            return (
              <ProductItem
                img={item.imageUrl}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
