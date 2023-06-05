import Image from "next/image";
import React from "react";

export interface Card {
  title: string;
  content: string;
  image?: string;
}
interface SectionComponentProps {
  leftCard: Card;
  rightCards: Card[];
}

const HeadlineSection: React.FC<SectionComponentProps> = ({
  leftCard,
  rightCards,
}) => {
  return (
    <div className="grid grid-cols-2 gap-1 mb-4  w-full     ">
      <div className=" p-4 flex w-full flex-col gap-3 col-span-2 lg:col-span-1 h-full">
        <Image
          width={300}
          height={400}
          src={leftCard.image}
          alt={leftCard.title}
        />
        <h2 className="text-lg font-bold mb-2">{leftCard.title}</h2>
        <p>{leftCard.content}</p>
      </div>
      <div className="grid grid-rows-2 gap-4 lg:col-span-1   ">
        {rightCards.map((card, index) => (
          <div key={index} className=" max-w-xl  h-full relative p-5 mb-4">
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                alt={card.title}
                src={card.image}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-lg font-bold ">{card.title}</h2>
            <p className="text-base"> {card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadlineSection;
