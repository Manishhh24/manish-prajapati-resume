import React, { useState } from "react";
import { SiVbulletin } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";

const ContentDescription = ({
  description,
  seeMore,
}: {
  description: string[];
  seeMore: string;
}) => {
  const [hover, setHover] = useState("translate-x-0");
  return (
    <div>
      {description.map((content, i) => {
        return (
          <span className="flex">
            <SiVbulletin className="mr-2 min-w-max" />
            <h4 className="text-[12px] xs:text-[15px] text-gray-800" key={i}>
              {content}
            </h4>
          </span>
        );
      })}

      {seeMore !== "" && (
        <h1
          onMouseOver={() => setHover("translate-x-2")}
          onMouseOut={() => setHover("translate-x-0")}
          className="ml-5 transition-all duration-500 text-xs md:text-sm flex items-center font-bold md:font-extrabold hover:cursor-pointer w-fit hover:text-blue-800"
        >
          {seeMore} &nbsp;&nbsp;{" "}
          <FaLongArrowAltRight
            className={`transition-all duration-500 ${hover}`}
          />
        </h1>
      )}
    </div>
  );
};

export default ContentDescription;
