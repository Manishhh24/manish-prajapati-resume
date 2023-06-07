import React, { useEffect, useState } from "react";
import { shorts } from "@/constants/components/header/headerContent/shorts";

const ShortsDisplay = () => {
  const [short, setShort] = useState({ x1: 0, x2: 0, x3: 0, currentShort: "" });
  useEffect(() => {
    let textCounter = setTimeout(() => {
      if (short.x2 == 0) {
        if (short.x3 == 0) {
          setShort({
            ...short,
            x2: short.x2 + 1,
            currentShort: shorts[short.x1][short.x2],
          });
        } else if (short.x3 == 1) {
          setShort({
            ...short,
            x1: (short.x1 + 1) % shorts.length,
            x2: 0,
            x3: 0,
            currentShort: "",
          });
        }
      } else if (short.x2 < shorts[short.x1].length) {
        if (short.x3 == 0) {
          setShort({
            ...short,
            x2: short.x2 + 1,
            currentShort: shorts[short.x1].slice(0, short.x2 + 1),
          });
        } else if (short.x3 == 1) {
          setShort({
            ...short,
            x2: short.x2 - 1,
            currentShort: shorts[short.x1].slice(0, short.x2 - 1),
          });
        }
      } else if (short.x2 >= shorts[short.x1].length) {
        if (short.x3 == 0) {
          setTimeout(
            () =>
              setShort({
                ...short,
                x2: short.x2 - 1,
                x3: 1,
                currentShort: shorts[short.x1].slice(0, short.x2 - 1),
              }),
            2000
          );
        }
      }
    }, 300);

    return () => clearTimeout(textCounter);
  }, [short]);
  return (
    <>
      <span className="flex">
        <p className="text-blue-900">{short.currentShort}</p>
        <p className="motion-safe:animate-pulse text-blue-900">|</p>
      </span>
    </>
  );
};

export default ShortsDisplay;
