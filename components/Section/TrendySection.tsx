import React from "react";
import Image from "next/image";

export interface Card {
  title: string;
  content: string;
  image?: string;
}
interface TrendySectionProps {
  cards: Card[];
}
const TrendySection = ({ cards }: TrendySectionProps) => {
  return (
    <div className="my-20 px-4 ">
      <div className="border-t-4 border-t-black my-8 p-0">
        <span className="bg-black text-white text-lg leading-kreativat-tight m-0 p-1">
          {" "}
          TRENDY
        </span>
      </div>
      <div className=" grid grid-cols-12 grid-rows-1 gap-4  ">
        {cards.map((card, i) => (
          <div
            key={i}
            className="col-span-12 md:col-span-6 lg:col-span-4  flex flex-col"
          >
            <div className="relative  	 w-auto max-h-screen  h-60 basis-full  ">
              <Image
                alt={card.title}
                src={card.image}
                fill
                style={{ objectFit: "fill" }}
              />
            </div>
            <h2 className=" font-bold  text-kreativat-card-title leading-kreativat-tight mt-4  mb-2">
              {card.title}
            </h2>
            <p className="font-airbnb text-sm"> {card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendySection;
