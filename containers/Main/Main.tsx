import React from "react";
import FAQSection from "../../components/Section/FAQSection";
import Goal from "../../components/Section/GoalSection";
import HeadlineSection from "../../components/Section/HeadlineSection";
import ProductLaunch from "../../components/Section/ProductLaunch";
import RecentSection from "../../components/Section/RecentSection";
import TrendySection from "../../components/Section/TrendySection";
import StatsComponent from "../../components/Stats/Stats";
import WorkWithUs from "../../components/WorkWithUs/WorkWithUs";
import {
  faqs,
  HEADLINE_SECTION,
  PRODUCT_LAUNCHES,
  RECENT_SECTION,
  TRENDY_SECTION,
} from "../../data/data";
import stats from "../../utils/stats";

const Main = () => {
  return (
    <div className="main  w-full  relative ">
      <div className=" bg-white	left-4 relative z-20    mx-6 md:mx-14">
        <StatsComponent stats={stats} />
      </div>
      <HeadlineSection
        leftCard={HEADLINE_SECTION[0]}
        rightCards={[...HEADLINE_SECTION.filter((item, i) => i > 0)]}
      />
      <TrendySection cards={TRENDY_SECTION} />
      <RecentSection cards={RECENT_SECTION} />
      <ProductLaunch cards={PRODUCT_LAUNCHES} />
      <Goal />
      <WorkWithUs />
      <FAQSection faqs={faqs} />
    </div>
  );
};

export default Main;
