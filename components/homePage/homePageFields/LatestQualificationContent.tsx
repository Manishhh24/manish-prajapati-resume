import React, { useState } from "react";
import { BsPlusCircleDotted, BsFillArrowRightSquareFill } from "react-icons/bs";
import ContentDescription from "./ContentDescription";

type LatestQualificationContentProps = {
  label: string;
  content: string[];
  description?: string[];
  seeMore?: string;
};

const LatestQualificationContent: React.FC<LatestQualificationContentProps> = ({
  label,
  content,
  description,
  seeMore,
}) => {
  const [design, setDesign] = useState({
    bsPlus: "rotate-0",
    borderWidth: "w-0",
    borderOpacity: "opacity-0",
    click: false,
    hover: false,
    desDisplay: "hidden",
    desHeight: "h-0",
    desBool: false,
  });

  return (
    <>
      <section className="flex flex-col pb-5 md:pb-10">
        <div className="flex flex-row">
          <div
            className={`flex flex-row items-center xs:pr-20 ${
              description && "hover:cursor-pointer"
            }`}
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
              description &&
              setDesign({
                ...design,
                click: !design.click,
                borderWidth: !design.click ? "w-full" : "w-0",
                bsPlus: design.bsPlus === "rotate-0" ? "rotate-45" : "rotate-0",
                borderOpacity: !design.click ? "opacity-100" : "opacity-0",
                desDisplay: design.desDisplay === "hidden" ? "flex" : "hidden",
                desHeight: design.desHeight === "h-0" ? "h-fit" : "h-0",
                desBool: design.desBool ? false : true,
              })
            }
          >
            <BsPlusCircleDotted
              className={`text-2xl sm:text-3xl md:text-4xl text-blue-700 hover:cursor-pointer ${design.bsPlus} transition-all duration-500`}
              onClick={() =>
                setDesign(
                  design.bsPlus === "rotate-45"
                    ? { ...design, bsPlus: "rotate-0" }
                    : { ...design, bsPlus: "rotate-45" }
                )
              }
            />
            <span className="flex flex-col ml-4 md:ml-7">
              <h1 className="text-md xs:text-xl md:text-2xl text-blue-600 font-ysabeauOffice">
                {label}
              </h1>
              <span
                className={`border-[1px] border-blue-800 h-0 ${design.borderWidth} ${design.borderOpacity} transition-all duration-500`}
              ></span>
            </span>
          </div>
        </div>
        <div
          className={`ml-10 md:ml-16 ${
            content.length <= 2
              ? "flex flex-col"
              : "grid grid-cols-2 xs:grid-cols-3"
          }`}
        >
          {content.map((item) => (
            <span className="pt-1 xs:pt-2 flex">
              <BsFillArrowRightSquareFill className="min-w-max text-blue-700 mt-1 mr-2 text-sm xs:text-lg smd:text-xl" />
              <p className="text-xs sm:text-sm md:text-lg italic font-robotoCondensed">
                {item}
              </p>
            </span>
          ))}
        </div>
        {description && (
          <div
            className={`content-description ml-10 md:ml-16 md:mr-5 mt-4 transition-all duration-1000 ${design.desDisplay} ${design.desHeight}`}
          >
            <ContentDescription
              seeMore={seeMore || ""}
              description={description}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default LatestQualificationContent;
