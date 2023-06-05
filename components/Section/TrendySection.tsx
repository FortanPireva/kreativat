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
    <div className="my-20 px:6 px-12">
      <div className="border-t-4 border-t-black my-8 p-0">
        <span className="bg-black text-white m-0 p-1"> TRENDY</span>
      </div>
      <div className=" grid grid-cols-12 grid-rows-1 gap-6   ">
        {cards.map((card, i) => (
          <div
            key={i}
            className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col"
          >
            <div>
              <Image
                alt={card.title}
                src={card.image}
                width={600}
                height={300}
              />{" "}
              <h2 className="text-lg font-bold ">{card.title}</h2>
              <p className="text-base"> {card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendySection;
