import Image from "next/image";
import React from "react";

const WorkWithUs = () => {
  return (
    <div className=" bg-black flex flex-col justify-between pt-12 px-12  items-center mx-auto min-h-screen text-white">
      <div className="flex flex-col justify-center items-center">
        <p className="font-unica-one pt-24 pb-12">Puno me ne</p>
        <div className="flex flex-col  text-center max-w-xl justify-center items-center gap-12">
          <h1 className="uppercase text-[40px] leading-kreativat-tight">
            Dërgo punën Tënde. Promovo veten.
          </h1>
          <button className="bg-white  font-bebas-neue text-base py-3 px-6 text-black w-36  mb-20 shadow-kreativat-button">
            DERGO PUNIM
          </button>
        </div>
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
