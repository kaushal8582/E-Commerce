import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cartContext from "../Store/cart-context";
import Nav from "../components/Nav";

const ProductDetails = () => {
  const { productsArr } = useContext(cartContext);
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    let productData = productsArr.filter((item) => item.id == id);
    console.log(productData);
    setData(productData[0]);
  }, []);

  return (
    <>
      <Nav />
      <div className="flex gap-10 items-center justify-center h-full mt-[100px]">
        <img src={data.imageUrl} alt="" className="w-[400px] h-[400px]" />
        <div>
          <h1>{data.title}</h1>
          <h3> $ {data.price}</h3>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
