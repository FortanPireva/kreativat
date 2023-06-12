import React, { useState } from "react";
import PlusIcon from "../../assets/icons/plus-icon.svg";
interface FAQ {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActiveIndex = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full p-6 ax-auto flex justify-center text-left items-center flex-col gap-5 py-14 min-h-screen ">
      <p className="uppercase w-full pt-20 text-left font-unica-one text-2xl leading-kreativat-tight">
        Key Figures
      </p>
      <h1 className="font-bebas-neue text-5xl  leading-kreativat-tight text-black">
        Sapo kemi fillu, por potenciali është i madh.
      </h1>
      <p className="font-unica-one text-xl leading-kreativat-tight">
        The most remarkable human achievements were created by groups of people
        brave enough to do something they’ve never done before.
      </p>
      <p className="font-unica-one text-xl leading-kreativat-tight pt-12 mb-5">
        The most remarkable human achievements were created by groups of people
        brave enough to do something they’ve never done before.
      </p>
      <div className="stats grid grid-cols-12  w-full gap-4 ">
        <div className="flex flex-col  justify-start col-span-12   ">
          <div className="stat w-7/12  pt-2 pl-2 bg-kreativat-bar-background mb-2">
            <p className="font-bebas-neue text-[40px]">280</p>
          </div>
          <p className="  pl-2 ">Cities</p>
        </div>

        <div className="flex flex-col col-span-12  w-4/12 ">
          <div className="stat pt-2 pl-2  bg-kreativat-bar-background  mb-2 ">
            <p className="font-bebas-neue text-[40px]">12</p>
          </div>
          <p className="pl-2">Key partners</p>
        </div>
        <div className="flex flex-col  col-span-12 w-10/12  ">
          <div className="stat pt-2 pl-2 bg-kreativat-bar-background mb-2">
            <p className="font-bebas-neue text-[40px]">3,200+</p>
          </div>
          <p className="pl-2">Positive co-workers (June 2022)</p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4 font-unica-one">
        Pyetje dhe Pergjigje
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 border-t-2 border-t-black w-full max-w-2xl font-unica-one"
        >
          <button
            onClick={() => toggleActiveIndex(index)}
            className="w-full text-left font-semibold"
          >
            {/* <PlusIcon /> */}
            {faq.question}
          </button>
          {activeIndex === index && <p className="mt-2">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
