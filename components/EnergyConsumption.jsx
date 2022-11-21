import React, { useEffect } from "react";
import { formatDateLabel } from "../utils/chart.js";
import { groupByDay, groupByHour, sortByTime } from "../utils/reading";
import Button from "./Button/Button";
import { renderNewChart } from "../utils/chart";

export const EnergyConsumption = ({ readings }) => {
  const containerId = "usageChart";
  const dataOf30Days = sortByTime(groupByDay(readings)).slice(-30);
  const dataOf24Hours = sortByTime(groupByHour(readings)).slice(-24);

  const labelsOf24Hours = [...Array(24).keys()].map((value) =>
    value < 10 ? `0${value}` : `${value}`
  );
  const labelsOf30Days = dataOf30Days.map(({ time }) => formatDateLabel(time));

  useEffect(() => {
    renderNewChart(containerId, dataOf24Hours, labelsOf24Hours);
  }, []);

  return (
    <>
      <h1 className="regular darkgray line-height-1 mb3">Energy dashboard</h1>
      <section className="mb3">
        <Button content="Last 30 days" />
        <Button content="Last 24 hours" />
      </section>
      <section className="chartHeight mb3">
        <canvas id={containerId} />
      </section>
    </>
  );
};
