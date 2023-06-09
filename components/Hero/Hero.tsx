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
      <div className="uppercase relative   text-white flex justify-start mt-32 md:mt-16  flex-col  items-center h-full  w-full  md:gap-14    ">
        <div className="flex flex-col justify-center text-center items-center    max-w-2xl ">
          <h1 className="text-6xl md:text-9xl font-bold max-w-xl ">
            BashkoHu <br /> me Kreativat
          </h1>
          <p className="mt-4 max-w-lg r mx-auto text-center w-10/12 text-base md:text-2xl font-unica-one text-kreativat-faint-white">
            PLATFORMË PËR PROMOVIMIN E PUNËVE KREATIVE E INOVATIVE TË TË RINJVE
            SHQIPTARË NGA KOSOVA
          </p>
        </div>
        <div className=" bg-white translate-y-1/3 md:translate-y-1/2 lg:translate-y-1/3	absolute bottom-0 mx-6 md:mx-14">
          <StatsComponent stats={stats} />
        </div>
      </div>
    </>
  );
};

export default Hero;
