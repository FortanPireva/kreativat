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
    <div className="w-full p-6 ax-auto flex justify-center items-center flex-col gap-5 py-14 min-h-screen ">
      <h2 className="text-2xl font-semibold mb-4">Pyetje dhe Pergjigje</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 border-t-2 border-t-black w-full max-w-2xl"
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
