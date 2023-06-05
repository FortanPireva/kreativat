import React from "react";
import HeadlineSection from "../../components/Section/HeadlineSection";
import { HEADLINE_SECTION } from "../../data/data";

const Main = () => {
  return (
    <div className="main mb-8 w-full">
      <HeadlineSection
        leftCard={HEADLINE_SECTION[0]}
        rightCards={[...HEADLINE_SECTION.filter((item, i) => i > 0)]}
      />
    </div>
  );
};

export default Main;
