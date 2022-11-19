import React, { useEffect } from "react";
import { renderChart } from "../utils/chart.js";
import { groupByDay, sortByTime } from "../utils/reading";
import Button from "./Button/Button";

export const EnergyConsumption = ({ readings }) => {
  const containerId = "usageChart";
  useEffect(() => {
    renderChart(containerId, sortByTime(groupByDay(readings)).slice(-30));
  }, []);

  return (
    <>
      <h1 className="regular darkgray line-height-1 mb3">Energy dashboard</h1>
      <section className="mb3">
        <Button content="Last 30 days"/>
        <Button content="Last 24 hours"/>
      </section>
      <section className="chartHeight mb3">
        <canvas id={containerId} />
      </section>
    </>
  );
};
