import React, { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";

const LatestQualificationContent = () => {
  const [design, setDesign] = useState({
    bsPlus: "rotate-0",
    borderWidth: "w-0",
    borderOpacity: "opacity-0",
    click: false,
    hover: false,
  });
  return (
    <>
      <section className="flex flex-col">
        <div className="flex flex-row">
          <div
            className="flex flex-row items-center pr-20"
            onMouseEnter={() =>
              setDesign({
                ...design,
                hover: true,
                borderWidth: "w-full",
                borderOpacity: "opacity-100",
              })
            }
            onMouseLeave={() =>
              setDesign({
                ...design,
                borderWidth: design.click ? "w-full" : "w-0",
                hover: false,
                borderOpacity: design.click ? "opacity-100" : "opacity-0",
              })
            }
            onClick={() =>
              setDesign({
                ...design,
                click: !design.click,
                borderWidth: !design.click
                  ? design.hover
                    ? "w-full"
                    : "w-0"
                  : "w-0",
                bsPlus: design.bsPlus === "rotate-0" ? "rotate-45" : "rotate-0",
                borderOpacity: !design.click
                  ? design.hover
                    ? "opacity-100"
                    : "opacity-0"
                  : "opacity-0",
              })
            }
          >
            <BsPlusCircleDotted
              className={`text-4xl text-blue-700 hover:cursor-pointer ${design.bsPlus} transition-all duration-500`}
              onClick={() =>
                setDesign(
                  design.bsPlus === "rotate-45"
                    ? { ...design, bsPlus: "rotate-0" }
                    : { ...design, bsPlus: "rotate-45" }
                )
              }
            />
            <span className="flex flex-col ml-3">
              <h1 className="text-2xl text-blue-600 font-ysabeauOffice">
                Latest Qualification
              </h1>
              <span
                className={`border-[1px] border-blue-800 h-0 ${design.borderWidth} ${design.borderOpacity} transition-all duration-500`}
              ></span>
            </span>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default LatestQualificationContent;
