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
    <div className="grid grid-cols-5 grid-rows-1 gap-24 mb-4  mt-96 md:mt-36  mx-auto justify-center  max-w-7xl ">
      <div className="  flex  flex-col  col-span-5 lg:col-span-3   h-full">
        <div className="relative  	 w-auto max-h-screen  h-96 basis-full  ">
          <Image
            alt={leftCard.title}
            src={leftCard.image}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h2 className=" font-bold  text-kreativat-card-title leading-kreativat-tight mt-4  mb-2">
          {leftCard.title}
        </h2>
        <p className="font-airbnb text-sm">{leftCard.content}</p>
      </div>
      <div className=" col-span-5 lg:col-span-2 flex flex-col   justify-center items-center gap-10  ">
        {rightCards.map((card, index) => (
          <div key={index} className="flex w-full flex-col ">
            <div className="relative  	 w-auto max-h-screen  h-60 basis-full  ">
              <Image
                alt={card.title}
                src={card.image}
                fill
                style={{ objectFit: "cover" }}
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

export default HeadlineSection;
