import React from "react";
import { groupByDay, sortByTime } from "../utils/reading";
import { getPowerConsumption } from "../utils/box";

const BoxSection = ({ title, usage, until }) => (
  <div className="regularBox overflow-hidden shadow-2 roundedMore">
    <p className="title">{title}</p>
    <p className="metric">{usage}</p>
    <p className="unit">{until}</p>
  </div>
);

export const Box = ({ readings }) => {
  const data = sortByTime(groupByDay(readings)).slice(-30);
  const consumption = getPowerConsumption(data);

  return (
    <section className="box flex">
      <BoxSection title="Cost 💰" usage="111" until="$" />
      <BoxSection title="Consumption ⚡" usage={consumption} until="kwh" />
      <BoxSection title="Footprint 👟" usage="333" until="tonnes" />
    </section>
  );
};
