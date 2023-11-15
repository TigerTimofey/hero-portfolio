"use client";

import React, { useState } from "react";
import PortofolioSLider from "./slider/slliderPortfolio";
import Swipe from "../images/animations/swipe.json";
import Lottie from "lottie-react";

export default function Portofolio() {
  const [animationVisible, setAnimationVisible] = useState(true);

  const handleAnimationComplete = () => {
    setAnimationVisible(false);
  };
  return (
    <>
      <div className="bg-gray-300" style={{ minHeight: "650px" }}>
        <div className="container flex items-center justify-center px-4 mx-auto">
          <h1
            style={{ fontFamily: "var(--font-calsans), sans-serif" }}
            className="mt-2 z-10 text-4xl text-transparent duration-1000 bg-black cursor-default text-edge-outline  font-display sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text"
          >
            .portfolio
          </h1>
        </div>

        <main className="mt-10 flex flex-col items-center flex-1 px-4 sm:px-20 w-full text-center z-10 py-8 sm:pb-20 relative">
          {animationVisible && (
            <Lottie
              animationData={Swipe}
              style={{
                width: "13%",
                position: "absolute",
                zIndex: "2",
                top: "130px",
              }}
              onComplete={handleAnimationComplete}
            />
          )}
          <div className="flex justify-between w-full items-baseline">
            <PortofolioSLider />
          </div>
        </main>
      </div>
    </>
  );
}
