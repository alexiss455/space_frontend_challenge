import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Crew from "../pages/crew";
import Destination from "../pages/destination";
import Home from "../pages/home";
import NotFound from "../pages/notfound";
import Technology from "../pages/technology";
import logo from "../assets/shared/logo.svg";
import Hum from "./humburger";
const navLinks = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "DESTINATION",
    path: "/destination",
  },
  {
    label: "CREW",
    path: "/crew",
  },
  {
    label: "TECHNOLOGY",
    path: "/technology",
  },
];

function Header() {
  const [isMenuOpen, toggleMenu] = useReducer((state) => !state, false);
  function handleClick(){
    toggleMenu(false)
  }
  return (
    <Router>
      <div className="max-md:mt-4 max-w-screen-[100vw] m-auto max-lg:pl-8 pl-16 ml-auto lg:pt-10 flex items-center justify-between after:block after:content-[''] after:h-[1px] after:w-full after:bg-gray-500 after:z-50 after:-mr-5 font-san2 after:max-lg:hidden">
        <img src={logo} className="md:pr-8" />

        <nav
          className={`max-lg:pr-10  z-40 pr-32 pl-20 flex items-center justify-center backdrop-blur-[1.5rem] order-2 max-md:flex-col max-md:fixed max-md:w-3/4 max-md:h-screen max-md:top-0 shdow duration-500 ${
            isMenuOpen ? "max-md:right-0" : "max-md:-right-full"
          }`}
        >
          <ul className="flex items-center justify-center gap-x-16 text-lg max-md:flex-col max-md:items-start">
            {navLinks.map((items, index) => (
              <li key={index}>
                <NavLink
                  onClick={handleClick}
                  to={items.path}
                  className=" relative after:bg-white after:w-0 after:h-[2px] after:absolute after:bottom-0 after:right-0 after:duration-300 hover:after:w-full hover:after:left-0 flex items-center justify-center gap-x-4 py-8 tracking-[.2rem]"
                >
                  <span className="font-black">0{index}</span>
                  {items.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Hum
          onClick={toggleMenu}
          className={`${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          className1={`${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          className2={`${isMenuOpen ? "opacity-0" : ""}`}
        />
      </div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
    </Router>
  );
}

export default Header;
