"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Grid from "@mui/material/Grid";

export default function Contact() {
  AOS.init({ once: false });
  AOS.refresh();
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-black relative">
        <div className="container flex items-center justify-center px-4 mx-auto">
          <h1
            style={{ fontFamily: "var(--font-calsans), sans-serif" }}
            className="mt-2 text-4xl text-transparent duration-1000 white cursor-default text-white font-display sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text"
          >
            .contact
          </h1>
        </div>

        <main className="mt-10 mb-10 flex flex-col items-center flex-1 sm:px-20 w-full text-center z-10 py-8 sm:pb-20 relative">
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
              integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
              crossOrigin="anonymous"
            />
            <ul>
              <li>
                <a href="https://github.com/TigerTimofey ">
                  <i className="fab fa-github icon "></i>{" "}
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/timofey-babisashvili/">
                  <i className="fab fa-linkedin-in icon "></i>
                </a>
              </li>
              <li>
                <a href="mailto:timofey.babisashvili@gmail.com">
                  <i className="fas fa-envelope icon "></i>
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1HuELTm2hqH7mwxRRPUKVltZbsepJM_fE/view?usp=sharing"
                  download
                >
                  <i className="fas fa-file icon ">
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.15em",
                        marginTop: "-1.7em",
                        color: "white",
                      }}
                    >
                      Resume
                    </span>
                  </i>
                </a>
              </li>
            </ul>
          </Grid>{" "}
        </main>
      </div>
    </>
  );
}
