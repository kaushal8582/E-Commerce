import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddMovieForm from "../components/AddMovieForm";

const Home = () => {
 

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://e-comm-13a6a-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) {
        throw new Error("Something went wrong Try Again!!!");
      }
      
      const data = await response.json();
      console.log(data)
      let dataArray =[];
      for(let key in data){
        let obj ={
          id: data[key].id,
          title: data[key].title,
          desc : data[key].desc,
          date : data[key].date
        }
        dataArray.push(obj);
      }

      setEvents(dataArray);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Nav  />
      <Header onFetchData={fetchData}  />
      <div className="px-40" >
        <AddMovieForm />
      </div>
      <div className="p-10 px-12">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : isLoading ? (
          <h2 className="text-gray-600">Loading...</h2>
        ) : (
          events.map((item) => (
            <div
              key={item.id}
              className="mt-2 flex items-center justify-between border-b pb-2 px-4 w-full"
            >
              <div className="flex items-center space-x-6">
                <span className="font-bold text-black">
                  {item.date}
                </span>
                <span className="text-gray-500">{item.desc}</span>
                <span className="text-gray-500">{item.title}</span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-md font-semibold">
                BUY TICKETS
              </button>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
   
  );
};

export default Home;
