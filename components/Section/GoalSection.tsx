import Image from "next/image";
import React from "react";

const Goal = () => {
  return (
    <div className=" flex flex-col justify-between pt-20 px-12  items-center mx-auto min-h-screen ">
      <div className="flex flex-col  text-center">
        <p className="uppercase font-unica-one text-base pb-10">
          QËllim fundamental
        </p>
        <h1 className="uppercase text-5xl pb-6">
          If you want to go far, go together.
        </h1>
        <p className="text-lg font-unica-one">
          The most remarkable human achievements were created by groups of
          people brave enough to do something they’ve never done before.
        </p>
      </div>

      <div className="    ">
        <Image
          alt={"launch-goal"}
          src={"/images/launch.png"}
          width={600}
          height={300}
        />{" "}
      </div>
    </div>
  );
};

export default Goal;
