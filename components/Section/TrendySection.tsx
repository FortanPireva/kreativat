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
    <div className="mx-auto grid grid-cols-12 gap-2">
      {cards.map((card, i) => (
        <div
          key={i}
          className="sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col"
        >
          <div>
            <Image alt={card.title} src={card.image} width={600} height={300} />{" "}
            <h2 className="text-lg font-bold ">{card.title}</h2>
            <p className="text-base"> {card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendySection;
