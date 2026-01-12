"use client";

import { useEffect, useState } from "react";
import Notification from "./Notification";
import Link from "next/link";
import Cart from "./Cart";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open || up ? "hidden" : "auto";
  }, [open, up]);

  return (
    <header className="fixed flex flex-col top-0 left-0 bg-white pb-4 w-full z-100 shadow-lg ">
      <Notification />
      <div className="flex md:border-b md:border-b-[#F4F4F4]  flex-wrap pt-3.5 md:py-3.5 px-6 md:px-16 ">
        <div className="flex gap-4 items-center justify-start w-1/2 md:order-1  pb-5  md:pb-0 md:w-1/4">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 group md:hidden z-700 cursor-pointer"
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
          <Link href="/" className="cursor-pointer">
            <img
              src="/assets/images/Logo.svg"
              alt="Logo"
              className="w-35 h-full"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4 justify-end w-1/2 md:w-1/4 md:order-3  pb-5 md:pb-0 lg:mx ">
          <p className="text-text-gray text-sm font-normal cursor-pointer">
            Your Account
          </p>
          <div className="w-px h-3 bg-gray-400"></div>
          <div
            onClick={() => setUp(true)}
            className="cursor-pointer w-6 h-6 relative"
          >
            <img src="/assets/icons/bag.svg" alt="cart" />
            <div className="bg-[#EB2606] rounded-[100px] w-3.5 h-3.5 text-white leading-[150%] text-[8px] flex items-center justify-center absolute top-2 left-3.5 md:w-4 md:h-4 md:text-[10px] md:top-[9px]">
              0
            </div>
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
          <button className="h-9 min-w-9 bg-button-green flex justify-center items-center rounded-[100px] cursor-pointer">
            <img
              src="/assets/icons/search-icon.svg"
              alt="Search-Icon"
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>

      {open ||
        (up && (
          <div
            onClick={() => {
              setOpen(false);
              setUp(false);
            }}
            className={`fixed inset-0 bg-black/60 z-40 ${open ? "md:hidden" : ""}`}
          ></div>
        ))}

      <div
        className={`absolute bg-[#02291b] top-8 left-0 w-4/5  opacity-80 shadow-lg transform  transition-all ease-in-out duration-300 max-md:z-600 flex flex-col items-center ${
          open ? "translate-x-0 " : "-translate-x-[761px]"
        } max-md:text-[16px] max-md:leading-[150%]
        md:static md:transform-none md:translate-x-0 md:h-auto md:opacity-100 md:bg-white md:shadow-none md:w-full md:py-4 md:px-[68px] `}
      >
        <div className="grid grid-cols-[1fr_24px] py-6 justify-between items-center md:hidden max-md:w-[80%]">
          <div className="flex justify-center">
            <img src="/assets/images/white-logo.svg" alt="Topshelf Logo" />
          </div>
          <div
            className="relative h-6 w-6 flex justify-center items-center p-1 "
            onClick={() => setOpen(!open)}
          >
            <span className="absolute left-0 top-1/2 block h-0.5 w-full bg-white rounded-full -translate-y-1/2 rotate-45"></span>
            <span className="absolute left-0 top-1/2 block h-0.5 w-full bg-white rounded-full -translate-y-1/2 -rotate-45"></span>
          </div>
        </div>
        <div className="md:w-full w-[80%] md:overflow-x-auto md:flex min-[1080px]:justify-center max-md:border-t max-md:border-white ">
          <nav className=" flex flex-col gap-6 text-white font-semibold text-left  md:text-text-gray md:flex-row md:items-center md:justify-center  md:text-base lg:gap-8 md:font-normal   max-md:py-6 max-md:w-[80%] ">
            <Link
              href="/category"
              onClick={() => setOpen(!open)}
              className="text-nowrap cursor-pointer"
            >
              Shop All
            </Link>
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
        <div className="flex items-center justify-center text-[12px] gap-4 py-5  border-t border-white text-white font-medium w-[80%] md:hidden">
          <p>Terms of Service</p>
          <div className="rounded-[100%] bg-white w-0.5 h-0.5"></div>
          <p>Privacy Policy</p>
        </div>
      </div>
      <Cart up={up} setUp={setUp} />
    </header>
  );
};

export default NavBar;
