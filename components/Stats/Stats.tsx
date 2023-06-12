import React from "react";
import dynamic from "next/dynamic";

interface Stat {
  number: number;
  value: string;
  symbol?: string;
}

interface StatsComponentProps {
  stats: Stat[];
}
const DynamicCountUphNoSSR = dynamic(() => import("react-countup"), {
  ssr: false,
});
const StatsComponent: React.FC<StatsComponentProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-2 lg:grid-cols-4 gap-4   text-black">
      {stats.map((stat, index) => (
        <div
          key={index}
          className=" flex flex-col font-bebas-neue items-center gap-2 pt-2  md:pt-10 justify-start "
        >
          <h2 className="text-5xl lg:text-4xl font-bold  leading-kreativat-tight">
            <DynamicCountUphNoSSR
              start={0}
              end={stat.number}
              duration={3}
              suffix={stat.symbol}
            />
            {/* {stat.number} */}
          </h2>
          <p className="text-2xl leading-kreativat-tight  lg:text-lg font-unica-one text-center">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsComponent;
