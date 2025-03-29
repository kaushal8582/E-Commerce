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

  return (
    <div className=" w-full h-screen">
      <Nav />
      <Header />
      <div className="flex gap-[20px] flex-wrap items-center justify-center" >
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
      <Footer/>
    </div>
  );
}

export default App;
