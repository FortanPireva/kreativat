import React from "react";
import stats from "../../utils/stats";
import StatsComponent from "../Stats/Stats";

interface HeroBannerProps {
  imageSrc: string;
  caption: string;
}
const Hero = () => {
  return (
    <>
      <div className="uppercase relative   text-white flex justify-center  z-50 flex-col  items-center min-h-full  w-full  md:gap-14    ">
        <div className="flex flex-col justify-center text-center items-center    max-w-2xl ">
          <h1 className="text-6xl md:text-9xl font-bold max-w-xl  font-bebas-neue">
            BashkoHu <br /> me Kreativat
          </h1>
          <p className="mt-4 max-w-lg r mx-auto text-center w-10/12 text-base md:text-2xl font-unica-one text-kreativat-faint-white">
            PLATFORMË PËR PROMOVIMIN E PUNËVE KREATIVE E INOVATIVE TË TË RINJVE
            SHQIPTARË NGA KOSOVA
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
