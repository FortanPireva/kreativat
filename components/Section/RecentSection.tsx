import Image from "next/image";
import React from "react";
export interface Card {
  title: string;
  content: string;
  category: string;
  image?: string;
}
interface RecentSectionProps {
  cards: Card[];
}
const RecentSection = ({ cards }: RecentSectionProps) => {
  return (
    <div className="my-20 px-4 mx-auto  max-w-7xl ">
      <div className="border-t-4 border-t-black my-8 p-0">
        <span className="bg-black  text-white text-lg leading-kreativat-tight m-0 p-1 uppercase">
          {" "}
          Më të rejat
        </span>
      </div>
      <div className=" grid grid-cols-12 grid-rows-1 gap-6   ">
        <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="grid grid-cols-12 grid-rows-1 gap-6 h-full  "
            >
              <div className="relative  col-span-10 	 w-auto max-h-screen  h-96 basis-full  ">
                <Image
                  alt={card.title}
                  src={card.image}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start gap-0">
                <span className="bg-none text-black  font-unica-one uppercase mb-3">
                  {card.category}
                </span>
                <h2 className="font-bold  text-kreativat-card-title leading-kreativat-tight mt-0 ">
                  {card.title}
                </h2>
                <p className="font-airbnb text-sm mt-3"> {card.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-around text-2xl items-start p-3 bg-gray-100">
          <div>
            <p>UPCOMING EVENT POSTER</p>
          </div>
          <div>OR AD POSTER</div>
        </div>
      </div>
    </div>
  );
};

export default RecentSection;
