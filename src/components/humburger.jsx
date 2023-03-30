const hum = ({ className, className1, className2, onClick }) => {
  return (
    <div
      className=" w-7 flex flex-col items-center justify-center gap-y-1 md:hidden mr-4 z-50"
      onClick={onClick}
    >
      <div
        className={`${className} bg-white w-full h-[2px] duration-500 `}
      ></div>
      <div
        className={`${className2} bg-white w-full h-[2px] duration-500 `}
      ></div>
      <div
        className={`${className1} bg-white w-full h-[2px] duration-500 `}
      ></div>
    </div>
  );
};
export default hum;
