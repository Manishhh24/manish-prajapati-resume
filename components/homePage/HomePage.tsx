import React from "react";
import Introduction from "./Introduction";
import HomeFieldsDisplay from "./HomeFieldsDisplay";
import TechnologyKnown from "../technologyKnown/TechnologyKnown";

const HomePage = () => {
  return (
    <>
      <Introduction />
      <HomeFieldsDisplay />
      <TechnologyKnown />
    </>
  );
};

export default HomePage;
