import React from "react";
import Goal from "../../components/Section/GoalSection";
import HeadlineSection from "../../components/Section/HeadlineSection";
import ProductLaunch from "../../components/Section/ProductLaunch";
import RecentSection from "../../components/Section/RecentSection";
import TrendySection from "../../components/Section/TrendySection";
import WorkWithUs from "../../components/WorkWithUs/WorkWithUs";
import {
  HEADLINE_SECTION,
  PRODUCT_LAUNCHES,
  RECENT_SECTION,
  TRENDY_SECTION,
} from "../../data/data";

const Main = () => {
  return (
    <div className="main  w-full">
      <HeadlineSection
        leftCard={HEADLINE_SECTION[0]}
        rightCards={[...HEADLINE_SECTION.filter((item, i) => i > 0)]}
      />
      <TrendySection cards={TRENDY_SECTION} />
      <RecentSection cards={RECENT_SECTION} />
      <ProductLaunch cards={PRODUCT_LAUNCHES} />
      <Goal />
      <WorkWithUs />
    </div>
  );
};

export default Main;
