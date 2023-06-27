"use client";
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import LatestQualificationContent from "./LatestQualificationContent";

const LatestQualification = () => {
  const [design, setDesign] = useState({ bsPlus: "rotate-0" });
  return (
    <>
      <article className="px-7 bg-blue-100">
        <div className="pt-10 bg-gradient-to-r from-blue-100 via-white to-blue-100">
          <LatestQualificationContent />
        </div>
      </article>
    </>
  );
};

export default LatestQualification;
