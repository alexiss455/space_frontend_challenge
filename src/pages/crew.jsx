import React, { useState } from "react";
import crew from "../jsonfileplaplanets/crew";

export default function crews() {
  const [tab, setTab] = useState(0);

  function handleClick(index) {
    setTab(index);
  }

  return (
    <div
      className={`min-h-screen w-screen -z-10 bg-[url('assets/crew/background-crew-desktop.jpg')]
  bg-cover flex items-center justify-center absolute top-0 bg-slate-900 max-md:pb-8`}
    >
      <div className=" max-w-5xl mx-auto max-lg:px-8 mt-28">
        <div className="flex items-center justify-start gap-x-4 text-2xl font-san2 tracking-widest">
          <h1 className="text-gray-400">02</h1>
          <h1>MEET YOUR CREW</h1>
        </div>
        <div className=" grid md:grid-cols-2 mt-16">
          <div className="text-gray-400 flex justify-between flex-col max-md:flex-col-reverse pb-10">
            <div>
              <h1 className="text-4xl font-sans tracking-wide">
                {crew[tab].title}
              </h1>
              <h2 className="text-4xl font-sans tracking-widest mt-4 text-white">
                {crew[tab].name}
              </h2>
              <p className="mt-8 leading-[1.75rem]">{crew[tab].content}</p>
            </div>

            <div className="flex items-center justify-start max-md:justify-center gap-x-4 mt-20 max-md:my-10">
              {crew.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleClick(index);
                  }}
                  className={` ${
                    tab === index ? "bg-white" : "bg-gray-500"
                  } w-4 h-4  rounded-full`}
                ></button>
              ))}
            </div>
          </div>

          <div className="m-auto max-md:order-first">
            <img
              src={crew[tab].img}
              alt="logo"
              className="w-full max-w-[400px] h-full max-h-[430px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
