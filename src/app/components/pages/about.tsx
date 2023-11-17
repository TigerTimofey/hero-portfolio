import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import LazyLoad from "react-lazy-load";
import PieChart from "../piecharts/piechartAbout";

import ReactPlayer from "react-player";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const aboutMe = {
  name: "Hi, I'm Tim - Software Developer from Estonia!",
  descriptionStart: `\u00A0 Since 2020, I've been actively doing web development, creating digital projects, and constantly improving my programming skills. My journey began with learning the basics of HTML, SCSS, and JavaScript and exploring Bootstrap. As I progressed, I got into React, Next.js, and TypeScript, expanding my toolkit. I consider myself a `,

  descriptionEnd: `\u00A0 I've successfully completed many additional courses, and my goal is to apply new knowledge in practice. In my free time away from coding, I'm a loving husband and father. My life is a balance between digital creativity and family values.`,
};

export default function About() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="bg-gray-300">
        <div className="container flex items-center justify-center px-4 mx-auto">
          <h1
            style={{ fontFamily: "var(--font-calsans), sans-serif" }}
            className="mt-2 z-10 text-4xl text-transparent duration-1000 bg-black cursor-default text-edge-outline  font-display sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text"
          >
            .about
          </h1>
        </div>
        <main className="flex flex-col items-center flex-1 px-4 sm:px-20 w-full text-center z-10 py-8 sm:pb-20 relative">
          <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-16 w-full hover:shadow-2xl transition pt-16 lg:pt-24 relative z-0">
            <div className="p-4 flex flex-col justify-center items-center border-b">
              <div className="flex justify-between w-full items-baseline">
                <div className="mx-auto text-center flex flex-col">
                  <div className="mx-auto">
                    <LazyLoad width="100%" threshold={0.25}>
                      <PieChart />
                    </LazyLoad>
                  </div>
                  <br />
                  <h4 className="font-semibold text-xl">
                    <code>{aboutMe.name}</code>
                  </h4>
                  <br />
                  <h5 className="text-gray-700">
                    {aboutMe.descriptionStart}
                    <button
                      onClick={handleOpen}
                      className="text-blue-500  cursor-pointer"
                    >
                      pufferfish
                    </button>
                    {" in the ocean of coding."}
                    {aboutMe.descriptionEnd}
                  </h5>
                </div>
              </div>
            </div>
          </section>{" "}
        </main>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{
              fontFamily: "var(--font-calsans), sans-serif",
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Timofey as the Pufferfish
          </Typography>
          <ReactPlayer
            url={"https://youtu.be/AY70INP5GB4"}
            controls={true}
            width="100%"
            height="100%"
          />
        </Box>
      </Modal>
    </>
  );
}
