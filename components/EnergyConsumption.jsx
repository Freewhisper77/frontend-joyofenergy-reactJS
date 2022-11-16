import React, { useEffect } from "react";
import { renderChart } from "../utils/chart.js";
import { groupByDay, sortByTime } from "../utils/reading";
import { handleClick } from "./button";

export const EnergyConsumption = ({ readings }) => {
  const containerId = "usageChart";
  useEffect(() => {
    renderChart(containerId, sortByTime(groupByDay(readings)).slice(-30));
  }, []);

  return (
    <>
      <h1 className="regular darkgray line-height-1 mb3">Energy dashboard</h1>
      <section className="mb3">
        <button
          className="
              h5
              inline-block
              shadow-2
              pl2
              pr2
              pt1
              pb1
              roundedMore
              border-grey
              bg-blue
              white
              bold
            "
        >
          Last 30 days
        </button>
        <button
          id="last-day"
          className="
              last-day
              h5
              inline-block
              shadow-2
              pl2
              pr2
              pt1
              pb1
              roundedMore
              border-grey
              bold
            "
          onClick={() => handleClick()}
        >
          Last 24 hours
        </button>
      </section>
      <section className="chartHeight mb3">
        <canvas id={containerId} />
      </section>
    </>
  );
};
