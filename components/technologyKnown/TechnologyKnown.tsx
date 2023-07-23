import React from "react";
import TechTabBar from "./TechTabBar";

const TechnologyKnown = () => {
  return (
    <>
      <section className="py-2 bg-gradient-to-l from-blue-100 via-white to-blue-50">
        <h1 className="w-fit text-blue-600 py-2 text-2xl mx-auto">
          Technologies Known
        </h1>
        <TechTabBar />
      </section>
    </>
  );
};

export default TechnologyKnown;
