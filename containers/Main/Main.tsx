import React from "react";
import HeadlineSection from "../../components/Section/HeadlineSection";
import TrendySection from "../../components/Section/TrendySection";
import { HEADLINE_SECTION, TRENDY_SECTION } from "../../data/data";

const Main = () => {
  return (
    <div className="main mb-8 w-full">
      <HeadlineSection
        leftCard={HEADLINE_SECTION[0]}
        rightCards={[...HEADLINE_SECTION.filter((item, i) => i > 0)]}
      />
      <TrendySection cards={TRENDY_SECTION} />
    </div>
  );
};

export default Main;
