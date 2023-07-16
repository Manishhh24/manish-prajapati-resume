import React from "react";
import Link from "next/link";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { SiHackerrank } from "react-icons/si";

const HeaderContent = () => {
  return (
    <>
      <div className="flex justify-between py-5 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 items-center">
        <h1 className="text-sm xxs:text-lg sm:text-2xl md:text-5xl text-white text-left pl-7 font-libreBaskerVille">
          MANISH &nbsp; PRAJAPATI
        </h1>
        <div className="pr-7 flex flex-row sm:flex-col gap-3 xs:gap-5 sm:gap-1">
          <a
            href="mailto:mmprajapaty@gmail.com"
            className="text-white text-sm xxs:text-lg sm:text-sm xs:text-lg md:text-2xl flex flex-row items-center gap-2 hover:cursor-pointer hover:font-semibold transition-transform delay-700 duration-1000"
          >
            <AiOutlineMail />{" "}
            <p className="text-xs hidden sm:block md:text-sm">
              mmprajapaty@gmail.com
            </p>
          </a>
          <Link
            href="https://www.linkedin.com/in/manish-prajapati-3126a31aa/"
            target="/blank"
            className="text-white text-sm xxs:text-lg sm:text-sm xs:text-lg md:text-2xl flex flex-row items-center gap-2 hover:cursor-pointer hover:font-semibold transition-transform delay-700 duration-1000"
          >
            <AiFillLinkedin />{" "}
            <p className="text-xs hidden sm:block md:text-sm">
              manish-prajapati-3126a31aa
            </p>
          </Link>
          <Link
            target="/blank"
            href={`https://www.hackerrank.com/mmprajapaty?hr_r=1`}
            className="text-white text-sm xxs:text-lg sm:text-sm xs:text-lg md:text-2xl flex flex-row items-center gap-2 hover:cursor-pointer hover:font-semibold transition-transform delay-700 duration-1000"
          >
            <SiHackerrank />{" "}
            <p className="text-xs hidden sm:block md:text-sm">mmprajapaty</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
