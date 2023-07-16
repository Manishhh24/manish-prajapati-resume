"use client";
import React from "react";
import { latestQualification } from "@/constants/components/homePage/latestQualification";
import LatestQualificationContent from "./LatestQualificationContent";

const LatestQualification = () => {
  return (
    <>
      <article className="px-7 bg-blue-100">
        <div className="pt-10 bg-gradient-to-r from-blue-100 via-white to-blue-100">
          {latestQualification.map((item) => (
            <LatestQualificationContent
              content={item.content}
              label={item.label}
              description={item.description}
              seeMore={item.seeMore}
            />
          ))}
        </div>
      </article>
    </>
  );
};

export default LatestQualification;
