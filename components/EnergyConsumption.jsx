import React, { useEffect } from "react";
import Button from "./Button/Button";
import { renderChart } from "../utils/chart";

export const EnergyConsumption = ({ data, label, isDone }) => {
  const containerId = "usageChart";

  useEffect(() => {
    renderChart(containerId, data, label);
  }, [data, label]);

  return (
    <>
      <h1 className="regular darkgray line-height-1 mb3">Energy dashboard</h1>
      <section className="mb3">
        <Button content="Last 30 days" isDone={isDone} />
        <Button content="Last 24 hours" isDone={isDone} />
      </section>
      <section className="chartHeight mb3">
        <canvas id={containerId} />
      </section>
    </>
  );
};
