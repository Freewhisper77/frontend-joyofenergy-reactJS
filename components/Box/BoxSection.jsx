import React from "react";
import { groupByDay, sortByTime } from "../../utils/reading";
import { getPowerConsumption } from "./box";
import { Box } from "./box";

export const BoxSection = ({ readings }) => {
  const data = sortByTime(groupByDay(readings)).slice(-30);
  const consumption = getPowerConsumption(data);

  return (
    <section className="box flex">
      <Box title="Cost 💰" usage="111" until="$" />
      <Box title="Consumption ⚡" usage={consumption} until="kwh" />
      <Box title="Footprint 👟" usage="333" until="tonnes" />
    </section>
  );
};
