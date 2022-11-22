import React from "react";
import { getCost, getFootPrint, getPowerConsumption } from "./CostConsumption";
import Box from "./Box";

export const BoxSection = ({ data }) => {
  const consumption = getPowerConsumption(data);
  const cost = getCost(consumption);
  const footprint = getFootPrint(consumption);

  return (
    <section className="box flex">
      <Box title="Cost 💰" usage={cost} until="$" />
      <Box title="Consumption ⚡" usage={consumption} until="kwh" />
      <Box title="Footprint 👟" usage={footprint} until="tonnes" />
    </section>
  );
};
