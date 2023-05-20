import React from "react";

const Navbar = () => {
  const menuItems = [
    "Home",
    "Education",
    "Projects",
    "MileStones",
    "Achievements",
    "Extra-curricular",
  ];

  return (
    <>
      <div className="">
        <nav className="flex justify-between items-center pl-7">
          <div className="w-1/5">Test</div>
          <div className="w-3/5 flex flex-row">
            <div className="flex flex-grow justify-around">
              {menuItems.map((menuitem, i) => {
                return (
                  <div
                    className={`flex flex-grow justify-around hover:text-blue-700 transition-all ease-in-out hover:underline hover:underline-offset-8 duration-300 hover:cursor-pointer`}
                  >
                    <div className="flex justify-around py-4">{menuitem}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
      <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 h-[2px] w-full"></div>
    </>
  );
};

export default Navbar;
