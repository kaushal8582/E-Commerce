import React, { useState } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const [isHome, setIsHome] = useState(true);

  const events = [
    {
      date: "JUL 16",
      location: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    { date: "AUG 05", location: "CHICAGO, IL", venue: "UNITED CENTER" },
    {
      date: "SEP 12",
      location: "NEW YORK, NY",
      venue: "MADISON SQUARE GARDEN",
    },
    { date: "OCT 22", location: "LOS ANGELES, CA", venue: "HOLLYWOOD BOWL" },
    { date: "NOV 10", location: "HOUSTON, TX", venue: "TOYOTA CENTER" },
  ];

  return (
    <div>
      <Nav isHome={isHome} />
      <Header isHome={isHome} />
      <div className="p-10 px-50">
        {events.map((item) => {
          return (
            <div key={Date.now()} className="mt-2  flex items-center justify-between border-b pb-2 px-4 w-full">
              <div className="flex items-center space-x-6">
                <span className="font-bold text-black">{item.date}</span>
                <span className="text-gray-500">{item.location}</span>
                <span className="text-gray-500">{item.venue}</span>
              </div>
              <button className="bg-blue-400 text-white px-4 py-2 rounded-md font-semibold">
                BUY TICKETS
              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
