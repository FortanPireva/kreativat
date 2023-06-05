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
      <div className="uppercase   text-white flex justify-center flex-col  items-center  w-full   h-full ">
        <div className="flex flex-col justify-center text-center items-center mt-36   max-w-2xl h-full">
          <h1 className="text-5xl md:text-7xl font-bold ">
            BashkoHu me Kreativat
          </h1>
          <p className="mt-4 max-w-lg text-lg font-unica-one">
            PLATFORMË PËR PROMOVIMIN E PUNËVE KREATIVE E INOVATIVE TË TË RINJVE
            SHQIPTARË NGA KOSOVA
          </p>
        </div>
        <div className="md:mt-20 	relative   translate-y-1/2 mx-6 md:mx-14">
          <StatsComponent stats={stats} />
        </div>
      </div>
    </>
  );
};

export default Hero;
