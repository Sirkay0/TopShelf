"use client";

import { useState } from "react";
import Notification from "./Notification";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed flex flex-col top-0 left-0 bg-white pb-4 w-full z-500 shadow-lg ">
      <Notification />
      <div className="flex   flex-wrap pt-3.5 px-6 md:px-16 ">
        <div className="flex gap-4 items-center justify-start w-1/2 md:order-1  pb-5  md:pb-0 md:w-1/4">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 group md:hidden z-700"
          >
            <span
              className={`h-0.5 w-6 bg-secondary transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-secondary transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-secondary transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
          <img
            src="/assets/images/Logo.svg"
            alt="Logo"
            className="w-35 h-full"
          />
        </div>
        <div className="flex items-center gap-4 justify-end w-1/2 md:w-1/4 md:order-3  pb-5 md:pb-0 lg:mx ">
          <p className="text-text-gray text-sm font-normal">Your Account</p>
          <div className="w-px h-3 bg-gray-400"></div>
          <div className="">
            <img src="/assets/icons/bag.svg" alt="cart" />
          </div>
        </div>
        <div className="w-full pt-5 flex items-center justify-center gap-2 md:order-2 md:px-0 md:pt-0 border-t border-gray-300 md:border-none md:w-2/4 ">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="border border-gray-400 rounded-2xl w-full py-1.5 px-3 md:w-100 text-[16px] leading-[150%]"
          />
          <button className="h-9 min-w-9 bg-button-green flex justify-center items-center rounded-[100px]">
            <img
              src="/assets/icons/search-icon.svg"
              alt="Search-Icon"
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden "
        ></div>
      )}

      <div
        className={`absolute bg-secondary top-0 right-0 w-64 h-screen opacity-60 shadow-lg transform  transition-transform duration-300 z-600  ${
          open ? "translate-x-0 " : "translate-x-64"
        } 
        md:static md:transform-none md:translate-x-0 md:h-auto md:opacity-100 md:bg-white md:shadow-none md:w-full md:py-4  `}
      >
        <nav className="flex flex-col gap-2 text-white text-lg font-bold text-left px-4 md:text-text-gray md:flex-row md:items-center md:justify-center md:flex-wrap md:text-base lg:gap-8 md:font-normal">
          <a href="http://" className="text-nowrap">
            Shop All
          </a>
          <a href="http://" className="text-nowrap">
            Flower
          </a>
          <a href="http://" className="text-nowrap">
            Edibles
          </a>
          <a href="http://" className="text-nowrap">
            Concentrates
          </a>
          <a href="http://" className="text-nowrap">
            Mushroom
          </a>
          <a href="http://" className="text-nowrap">
            Promotions/Bundles
          </a>
          <a href="http://" className="text-nowrap">
            Support
          </a>
          <a href="http://" className="text-nowrap">
            Rewards
          </a>
          <a href="http://" className="text-nowrap">
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
