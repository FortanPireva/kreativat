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
    <div className="my-20 px:6 px-12">
      <div className="border-t-4 border-t-black my-8 p-0">
        <span className="bg-black text-white m-0 p-1 uppercase">
          {" "}
          Më të rejat
        </span>
      </div>
      <div className=" grid grid-cols-12 grid-rows-1 gap-6   ">
        <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
          {cards.map((card, i) => (
            <div key={i} className="grid grid-cols-12 grid-rows-1 gap-6 ">
              <div className="col-span-12 md:col-span-6">
                <Image
                  alt={card.title}
                  src={card.image}
                  width={600}
                  height={300}
                />
              </div>
              <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start gap-3">
                <span className="bg-gray-100 uppercase">{card.category}</span>
                <h2 className="text-lg font-bold ">{card.title}</h2>
                <p className="text-base"> {card.content}</p>
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
