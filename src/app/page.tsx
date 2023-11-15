"use client";

import React from "react";
import Particles from "./components/particles/particles";
import About from "./components/pages/about";
import WelcomePage from "./components/pages/welcome";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import LazyLoad from "react-lazy-load";
import Skills from "./components/pages/skills";
import Portofolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={300}
      />
      <LazyLoad height={762} threshold={0.25}>
        <div>
          {" "}
          <WelcomePage />
        </div>
      </LazyLoad>
      <LazyLoad width="100%" threshold={0.25}>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          {" "}
          <About />
        </div>
      </LazyLoad>
      <LazyLoad width="100%" threshold={0.25}>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          {" "}
          <Skills />
        </div>
      </LazyLoad>
      <LazyLoad width="100%" threshold={0.25}>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          {" "}
          <Portofolio />
        </div>
      </LazyLoad>
      <LazyLoad width="100%" threshold={0.25}>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          {" "}
          <Contact />
        </div>
      </LazyLoad>
    </>
  );
}
