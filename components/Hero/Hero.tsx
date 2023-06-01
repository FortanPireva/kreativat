import React from "react";

interface HeroBannerProps {
  imageSrc: string;
  caption: string;
}
const Hero = () => {
  return (
    <div className="uppercase text-white flex justify-center items-center">
      <div className="flex flex-col justify-center text-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-7xl font-bold ">BashkoHu me Kreativat</h1>
        <p className="mt-4 max-w-lg text-lg">
          PLATFORMË PËR PROMOVIMIN E PUNËVE KREATIVE E INOVATIVE TË TË RINJVE
          SHQIPTARË NGA KOSOVA
        </p>
      </div>
    </div>
  );
};

export default Hero;
