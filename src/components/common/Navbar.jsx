import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_DATA } from "../../utils/helper";
import Icons from "./Icons";
import Heading from "./Heading";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const path = useLocation().pathname;
  console.log(path);

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";
  }, [nav]);
  return (
    <header className="px-4 bg-shadow-brown md:pt-5.5 md:pb-5.25 py-4">
      <nav className="max-w-285 w-full mx-auto flex flex-row items-center justify-between">
        <Link to="/">
          <img
            className="md:w-29.75 md:h-11.75 sm:w-25 sm:h-9 w-22 h-8 cursor-pointer"
            src="/assets/image/logo.webp"
            alt=""
          />
        </Link>

        <div className=" flex items-center justify-center gap-12">
          <ul
            className={`flex items-center justify-center gap-8 md:flex-row flex-col max-md:fixed max-md:top-0 max-md:w-full max-md:h-screen max-md:bg-shadow-brown max-md:flex max-md:items-center max-md:justify-center transition-all duration-300 z-50 ${nav ? "max-md:left-0" : "max-md:-left-full"}`}
          >
            {NAV_DATA.map((item, index) => (
              <Link to={item.link} key={index} onClick={() => setNav(false)}>
                <Heading
                  heading={item.title}
                  className={<> ${item.link === path && "active"}</>}
                  vari={"pri"}
                />
              </Link>
            ))}
          </ul>
          <div className="flex items-center gap-4 md:hidden">
            <a target="-blank" href="https://twitter.com/"  className="md:w-10 md:h-10 sm:w-8 sm:h-8 w-7 h-7 cursor-pointer border rounded-md border-white flex items-center justify-center">
              <Icons icon={"twitter"}  />
            </a>
            <a target="-blank" href="https://web.telegram.org/k/" className="md:w-10 md:h-10 sm:w-8 sm:h-8 w-7 h-7 cursor-pointer border rounded-md border-white flex items-center justify-center">
              <Icons icon={"telegram"} />
            </a>
            <a target="-blank" href="https://discord.com/" className="md:w-10 md:h-10 sm:w-8 sm:h-8 w-7 h-7 cursor-pointer border rounded-md border-white flex items-center justify-center">
              <Icons icon={"descord"} />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 max-md:hidden">
          <a target="-blank" href="https://twitter.com/" className="w-10 h-10 border rounded-md cursor-pointer border-white flex items-center justify-center">
            <Icons icon={"twitter"} />
          </a>
          <a target="-blank" href="https://web.telegram.org/k/" className="w-10 h-10 border rounded-md cursor-pointer border-white flex items-center justify-center">
            <Icons icon={"telegram"} />
          </a>
          <a target="-blank" href="https://discord.com/" className="w-10 h-10 border rounded-md cursor-pointer border-white flex items-center justify-center">
            <Icons icon={"descord"} />
          </a>
        </div>

        <div className="flex flex-row items-center md:hidden sm:gap-5 gap-3">
          <button
            onClick={() => setNav(!nav)}
            className="md:hidden relative w-6 h-6 z-500 cursor-pointer"
          >
            <span
              className={` absolute left-0 w-6 h-1 bg-white rounded transition-all duration-300 ${nav ? "rotate-45 top-2.5" : "top-0"}`}
            ></span>
            <span
              className={` absolute left-0 w-6 h-1 bg-white rounded transition-all duration-300 ${nav ? "opacity-0" : "top-2.5"}`}
            ></span>
            <span
              className={` absolute left-0 w-6 h-1 bg-white rounded transition-all duration-300 ${nav ? "-rotate-45 top-2.5" : "top-5"}`}
            ></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
