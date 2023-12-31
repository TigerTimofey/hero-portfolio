import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import SwiperInstance from "swiper";
import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../styles/globals.css";

import { portfolio } from "../../Services/data";

import { styled } from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import Swipe from "../../images/animations/swipe.json";

import Lottie from "lottie-react";

import LazyLoad from "react-lazy-load";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ItemName = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontSize: "1.5rem",
}));
export default function PortfolioSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [animationVisible, setAnimationVisible] = useState(true);
  const [showLottie, setShowLottie] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLottie(true);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleAnimationComplete = () => {
    setAnimationVisible(false);
    setShowLottie(false);
  };

  const handleSlideChange = (swiper: SwiperInstance) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  if (portfolio.length === 0) {
    return <div>In development</div>;
  }

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <ItemName
        style={{
          fontFamily: "var(--font-calsans), sans-serif",
          color: "black",
        }}
      >
        {portfolio[activeSlideIndex].name}
      </ItemName>
      {showLottie && (
        <LazyLoad width="100%" className="animate-title" threshold={0.25}>
          <Lottie
            loop={2}
            animationData={Swipe}
            style={{
              width: "20%",
              position: "absolute",
              zIndex: "9",
              top: "90px",
              left: "80px",
              color: "white",
            }}
            onComplete={handleAnimationComplete}
          />
        </LazyLoad>
      )}

      <Grid item xs={12} className="flex justify-center">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {portfolio[activeSlideIndex].code && (
            <a
              href={portfolio[activeSlideIndex].code}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Item
                style={{
                  backgroundColor: "rgb(208, 105, 127)",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                Code
              </Item>
            </a>
          )}
          {portfolio[activeSlideIndex].demo && (
            <a
              href={portfolio[activeSlideIndex].demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Item
                style={{
                  backgroundColor: "rgb(58, 132, 126)",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                Demo
              </Item>
            </a>
          )}
          {!portfolio[activeSlideIndex].code &&
            !portfolio[activeSlideIndex].demo && (
              <Item
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                In development
              </Item>
            )}
        </Stack>
      </Grid>

      <Grid item xs={5}>
        <div className="swiperDiv">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper "
            onSlideChange={handleSlideChange}
          >
            {portfolio.map((item, index) => (
              <SwiperSlide key={index}>
                <Image src={item.img} alt="port" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Grid>

      <Grid item xs={6} sm={10} md={12} className="flex justify-center">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
        >
          {portfolio[activeSlideIndex].stack.map((item, index) => (
            <Item key={index} style={{ padding: "4px" }}>
              {item}
            </Item>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
