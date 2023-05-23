"use client";
import React, { useRef, useState } from "react";
import { navbarContent } from "@/constants/components/header/navbarContent";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState("translate-x-36");
  return (
    <>
      <nav className="flex justify-between items-center pl-7">
        <div className="w-full sm:w-1/5">Test</div>
        <div className="w-full hidden sm:w-3/5 smd:flex flex-row">
          <div className="flex flex-grow text-xs md:text-sm lg:text-base">
            {navbarContent.map((menuitem, i) => {
              return (
                <div
                  className={`flex flex-grow justify-between hover:text-blue-700 transition-all ease-in-out hover:underline hover:underline-offset-8 duration-300 hover:cursor-pointer`}
                >
                  <div className="flex justify-around py-4">
                    {menuitem.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="flex smd:hidden mr-7 my-2 p-1 text-blue-600 border-blue-400 transition-all active:bg-blue-600 active:text-white border-[2px] rounded-md"
          onClick={() =>
            setTranslateX(
              translateX == "translate-x-36"
                ? "translate-x-1"
                : "translate-x-36"
            )
          }
        >
          <GiHamburgerMenu className="text-end" />
        </div>
        <div
          ref={menuRef}
          className={`fixed bg-blue-600 smd:hidden ${translateX} h-fit rounded-md w-36 z-[1] p-4 pr-2 right-0 top-0 mt-28 sm:mt-36 md:mt-44 transition-all duration-500`}
        >
          <div className="flex flex-col text-[15px] text-white">
            <a>
              <AiOutlineClose onClick={() => setTranslateX("translate-x-36")} />
            </a>
            <br />
            {navbarContent.map((menuItem, i) => {
              return (
                <Link href="" className="py-1 border-b-[1px] ">
                  {menuItem.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 h-[2px] w-full"></div>
    </>
  );
};

export default Navbar;
