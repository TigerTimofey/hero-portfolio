import React, { useState, useEffect } from "react";
import Image from "next/image";
import { skills } from "../Services/data";
import Grid from "@mui/material/Grid";
import remoteJob from "../images/animations/remoteJob.json";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  AOS.init({ once: false });
  AOS.refresh();
  useEffect(() => {
    AOS.refresh();
  }, []);

  const [hoveredYear, setHoveredYear] = useState(null);
  const [hoveredColor, setHoveredColor] = useState("#e5e5e5");

  const handleMouseEnter = (year: any, color: string) => {
    setHoveredYear(year);
    setHoveredColor(color);
  };

  const handleMouseLeave = () => {
    setHoveredYear(null);
    setHoveredColor("#e5e5e5");
  };

  return (
    <>
      <div className="bg-black relative">
        <div className="container flex items-center justify-center  mx-auto">
          <h1
            style={{ fontFamily: "var(--font-calsans), sans-serif" }}
            className="mt-2 mb-6 text-4xl text-transparent duration-1000 white cursor-default text-white font-display sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text"
          >
            .skills
          </h1>
        </div>
        <main className="sm:mx-10 mt-5 mb-10 px-4 z-10 sm:pb-20 relative">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {skills.map((item) => (
                  <Grid item key={item.id} xs={3} md={4}>
                    <div
                      style={{
                        borderRadius: "10%",
                        marginLeft: "20px",
                        padding: "10px",
                        overflow: "hidden",

                        maxWidth: "65px",
                        maxHeight: "65px",
                      }}
                      className="image-container "
                      onMouseEnter={() =>
                        handleMouseEnter(item.year, item.color)
                      }
                      onMouseLeave={handleMouseLeave}
                    >
                      <Image
                        className="hover-image"
                        width={60}
                        height={60}
                        src={item.img}
                        alt="port"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {!hoveredYear && (
                    <div
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="900"
                      style={{
                        position: "absolute",
                        right: "14rem",
                        fontFamily: "var(--font-calsans), sans-serif",
                        color: "white",
                      }}
                      className=" xs:mr-20 xl:mx-40 text-xl mx-5 mt-4 animate-title "
                    >
                      <h1>Hover skill for experience</h1>
                    </div>
                  )}
                  {hoveredYear && (
                    <div
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="900"
                      style={{
                        position: "absolute",
                        right: "15.5rem",
                        backgroundColor: hoveredColor,
                        padding: "10px",
                        borderRadius: "5%",
                        fontFamily: "var(--font-calsans), sans-serif",
                      }}
                      className="md:mx-20 xl:mx-40"
                    >
                      <h1 className=" first-letter:mt-2 mb-2 text-3xl text-transparent duration-1000 white cursor-default text-white font-display whitespace-nowrap bg-clip-text">
                        {hoveredYear}
                      </h1>
                    </div>
                  )}
                </Grid>

                <Grid item xs={12} style={{ marginTop: "2rem" }}>
                  <Lottie
                    style={{ maxWidth: "70%", marginLeft: "auto" }}
                    animationData={remoteJob}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </main>
      </div>
    </>
  );
}
