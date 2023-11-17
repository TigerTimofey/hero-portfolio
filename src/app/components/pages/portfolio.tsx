"use client";

import React, { useState } from "react";
import PortofolioSLider from "./slider/slliderPortfolio";

export default function Portofolio() {
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
          <div className="flex justify-between w-full items-baseline">
            <PortofolioSLider />
          </div>
        </main>
      </div>
    </>
  );
}
