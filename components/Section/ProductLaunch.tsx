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
    <div className="bg-[#F7F7F7] flex flex-col justify-around py-12 px-6 md:px-24 items-center mx-auto min-h-screen ">
      <div className="flex flex-col gap-2 text-center pt-8 mb-16">
        <h1 className="uppercase font-bebas-neue  text-[40px] leading-kreativat-tight font-bold">
          NEW PRODUCT LAUNCHES
        </h1>
        <p className="text-lg font-unica-one">
          Follow the latest product launches to get updated
        </p>
      </div>

      <div className=" grid grid-cols-12 grid-rows-1 gap-6   ">
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
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2 className=" font-bold  text-2xl leading-kreativat-tight mt-4  mb-2 ">
              {card.title}
            </h2>
            <p className="font-airbnb text-sm"> {card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLaunch;
