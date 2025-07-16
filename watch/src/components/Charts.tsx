import React from "react";
import { ReactComponent as PieChart } from "../assets/icons/PieChart.svg";
import { ReactComponent as SingleLineChart } from "../assets/icons/LineChart.svg";
import { ReactComponent as SingleLineChartSM } from "../assets/icons/lineChartsmall.svg";

const Charts: React.FC = () => {
  return (
    <section className="pt-[50px] pl-[20px] pr-[20px] md:pt-[37px] md:pl-[70px] md:pr-[72px]">
      <div className="container flex flex-col items-center md:items-start">
        <h1 className="md:text-[40px] md:mb-[30px] text-[32px] mb-[25px]">
          Графік цін
        </h1>
        <div className="flex md:flex-row flex-col mb-3.5 w-full gap-2 justify-between">
          <div className="relative">
            <div className="md:absolute flex gap-2 md:mt-[18px] md:ml-[28px] md:justify-start justify-center mb-[25px]">
              <button className="w-[94px] px-4 py-1 bg-black text-white rounded">
                <h3 className="leading-[24px]">1 рік</h3>
              </button>
              <button className="w-[94px] px-4 py-1 border rounded">
                <h3 className="leading-[24px]">3 м</h3>
              </button>
            </div>
            <div className="flex justify-center">
              <SingleLineChart className="max-w-full hidden md:block" />
              <SingleLineChartSM className="md:hidden" />
            </div>
            <div className="w-full"></div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[30px] ">
            <h3 className="text-center md:text-[24px] md:leading-[29px] text-[32px] leading-[32px]">
              Продуктивність моделі: 80%
            </h3>
            <PieChart className="max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charts;
