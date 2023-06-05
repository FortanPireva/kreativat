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
    <div className="grid grid-cols-5 grid-rows-1 gap-10 mb-4  mt-36 px:6 px-12 justify-center    ">
      <div className="  flex w-full flex-col  col-span-5 lg:col-span-3 h-full">
        <Image
          width={400}
          height={400}
          src={leftCard.image}
          alt={leftCard.title}
        />
        <h2 className="text-lg font-bold mb-2">{leftCard.title}</h2>
        <p>{leftCard.content}</p>
      </div>
      <div className=" col-span-5 lg:col-span-2 flex flex-col   justify-center items-center  ">
        {rightCards.map((card, index) => (
          <div key={index} className="flex flex-col gap-2 ">
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                alt={card.title}
                src={card.image}
                width={600}
                height={300}
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
