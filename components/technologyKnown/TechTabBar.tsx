"use client";
import React, { useState } from "react";
import { techTabs } from "@/constants/components/technologyKnown/technologies";

const TechTabBar = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex my-5 w-fit mx-auto gap-16 border-b border-b-blue-800 pb-4 px-5">
      {techTabs.map((item, i) => (
        <span
          key={i}
          className={`text-blue-700 hover:cursor-pointer ${
            active === i && "font-bold"
          }`}
          onClick={() => setActive(i)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default TechTabBar;
