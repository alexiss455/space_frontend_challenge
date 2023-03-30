import React from "react";
export default function home() {
  return (
    <div
      className={`min-h-screen w-screen -z-10 bg-[url('assets/home/background-home-desktop.jpg')]
bg-cover flex items-center justify-center absolute top-0 bg-slate-900 max-md:pb-8`}
    >
      <div className="grid md:grid-cols-2 max-w-5xl gap-y-8 mx-auto gap-x-32 max-lg:px-8 mt-28">
        <div className="text-gray-400 max-md:text-center">
          <h2 className="text-xl font-san2 tracking-widest">
            SO YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="text-[8rem] font-sans text-white max-md:text-[6rem]">
            SPACE
          </h1>
          <p className="font-san2 text-[1.25rem]">
            Let's face it; if you want to go to space you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experince
          </p>
        </div>
        <div
          className="relative text-[2rem] font-sans w-64 h-64 bg-white text-black flex items-center justify-center rounded-full m-auto after:content-['']  after:w-64 after:h-64 after:bg-white after:opacity-25 after:rounded-full after:absolute after:hover:scale-125 after:duration-700 cursor-pointer
          "
        >
          <h1>EXPLORE</h1>
        </div>
      </div>
    </div>
  );
}
