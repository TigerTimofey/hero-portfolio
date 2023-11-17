import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Scroll from "../images/animations/scroll.json";

export default function WelcomePage() {
  const [showLottie, setShowLottie] = useState(false);
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLottie(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const headingTimeoutId = setTimeout(() => {
      setShowHeading(true);
    }, 1000);

    return () => clearTimeout(headingTimeoutId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1
        className="z-10 text-4xl text-transparent duration-0 bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
        style={{ fontFamily: "var(--font-calsans), sans-serif" }}
      >
        .timofey
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center relative">
        {showHeading && (
          <code>
            <h3 className="absolute left-1/2 transform -translate-x-1/2 translate-x-100 text-sm text-zinc-500 mx-5 typing-demo">
              PASSIONATE SOFTWARE DEVELOPER.
            </h3>
          </code>
        )}
      </div>

      {showLottie && (
        <Lottie
          animationData={Scroll}
          loop={1}
          style={{
            width: "5%",
            position: "absolute",
            zIndex: "10",
            bottom: "1px",
          }}
        />
      )}
    </div>
  );
}
