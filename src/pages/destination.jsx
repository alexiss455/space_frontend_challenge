import React, { useState } from "react";
import planets from "../jsonfileplaplanets/destiantion";
export default function destination() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div
      className={`min-h-screen w-screen -z-10 bg-[url('assets/destination/background-destination-desktop.jpg')]
  bg-cover flex items-center justify-center absolute top-0 bg-slate-900 max-md:pb-8`}
    >
      <div className="max-w-5xl mx-auto max-lg:px-8 mt-28">
      
        <h1 className="text-2xl font-san2 tracking-widest mb-14">
          <span className="text-gray-400">01</span> PICK YOUR DESTINATION
        </h1>

        <div className="grid md:grid-cols-2 gap-x-32 gap-y-8">
          <div>
            <div className="flex items-center justify-start gap-x-4 text-xl text-gray-400 max-sm:text-lg">
              {planets.map((planets, index) => (
                <button
                  key={index}
                  className={` ${activeTab === index ? `actives` : ""} pb-4
                relative duration-500 after:bg-white after:w-0 after:h-[2px] 
                after:absolute after:bottom-0 after:right-0 after:duration-300 
                hover:after:w-full hover:after:left-0`}
                  onClick={() => handleTabClick(index)}
                >
                  {planets.title}
                </button>
              ))}
            </div>

            <h1 className="font-sans text-9xl max-lg:text-8xl max-sm:text-6xl mt-4 max-md:text-center">
              {planets[activeTab].title}
            </h1>
            <p className="font-san2 text-[1.25rem] text-gray-400">
              {planets[activeTab].description}
            </p>
            <div className="grid grid-cols-2 mt-6 text-gray-400 whitespace-nowrap">
              <div>
                <p>AVG. DISTANCE</p>
                <p className="text-4xl font-sans text-white mt-2 max-sm:text-2xl">
                  {planets[activeTab].distance}
                </p>
              </div>
              <div>
                <p>EST. TRAVEL TIME</p>
                <p className="text-4xl font-sans text-white mt-2 max-sm:text-2xl">
                  {planets[activeTab].traveltime}
                </p>
              </div>
            </div>
          </div>
          <div className="order-first">
            <img
              src={planets[activeTab].img}
              alt="planets"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
