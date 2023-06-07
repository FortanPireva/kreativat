import Image from "next/image";
import React from "react";

const WorkWithUs = () => {
  return (
    <div className=" bg-black flex flex-col justify-between pt-12 px-12  items-center mx-auto min-h-screen text-white">
      <div className="flex flex-col  text-center max-w-xl pt-12 justify-center items-center gap-12">
        <h1 className="uppercase text-4xl font-bold">
          Dërgo punën Tënde. Promovo veten.
        </h1>
        <button className="bg-white text-black w-36 p-3">DERGO PUNEN</button>
      </div>

      <div className="    ">
        <Image
          alt={"work-with-us"}
          src={"/images/workwithus.png"}
          width={600}
          height={300}
        />{" "}
      </div>
    </div>
  );
};

export default WorkWithUs;
