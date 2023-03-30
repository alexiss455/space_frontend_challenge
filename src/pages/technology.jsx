import React, { useState } from "react";
import tech from "../jsonfileplaplanets/technology";
export default function technology() {
  const [tabs, setTabs] = useState(0);
  function handleClick(index) {
    setTabs(index);
  }

  return (
    <div
      className={`min-h-screen w-screen -z-10 
      bg-[url('assets/technology/background-technology-desktop.jpg')]
    bg-cover flex items-center 
    justify-center absolute top-0 bg-slate-900 max-md:pb-8`}
    >
      <div className=" max-w-7xl ml-auto max-lg:px-8 mt-28 ">
        <div className="max-md:pb-8 flex items-center justify-start gap-x-4 text-2xl font-san2 tracking-widest">
          <h1 className="text-gray-400">03</h1>
          <h1>SPACE LUNCH 101</h1>
        </div>

        <div className=" grid md:grid-cols-2 gap-x-16 gap-y-12">
          <div className="flex flex-row max-md:flex-col gap-x-12">
            <div className=" flex  md:flex-col justify-center items-start gap-8 ">
              {tech.map((itemx, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleClick(index);
                  }}
                  className={` ${
                    tabs === index ? "bg-white text-black" : ""
                  } w-16 h-16 border border-gray-400 text-3xl font-sans rounded-full hover:bg-gray-800`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="text-gray-400 my-auto max-md:pt-8">
              <p className="tracking-widest font-san2">THE TERMINOLOGY...</p>
              <p className="text-4xl font-sans tracking-widest text-white mt-4 mb-8">
                {tech[tabs].title}
              </p>
              <p>{tech[tabs].content}</p>
            </div>
          </div>

          <div className="ml-auto">
            <img src={tech[tabs].img} />
          </div>
        </div>
      </div>
    </div>
  );
}
