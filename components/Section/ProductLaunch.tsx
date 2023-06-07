import Image from "next/image";
import React from "react";
export interface Card {
  title: string;
  content: string;
  image?: string;
}
interface ProductLaunchProps {
  cards: Card[];
}
const ProductLaunch = ({ cards }: ProductLaunchProps) => {
  return (
    <div className="bg-[#F7F7F7] flex flex-col justify-around py-12 px-12 md:px-24 items-center mx-auto min-h-screen ">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="uppercase text-4xl font-bold">NEW PRODUCT LAUNCHES</h1>
        <p className="text-lg">
          Follow the latest product launches to get updated
        </p>
      </div>

      <div className=" grid grid-cols-12 grid-rows-1 gap-6   ">
        {cards.map((card, i) => (
          <div
            key={i}
            className="col-span-12 md:col-span-6 lg:col-span-4  flex flex-col"
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

export default ProductLaunch;
