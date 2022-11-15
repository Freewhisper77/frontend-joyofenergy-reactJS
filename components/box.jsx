import React from "react";

const BoxSection = ({ title, usage, until }) => (
  <div className="regularBox overflow-hidden shadow-2 roundedMore">
    <p className="title">{title}</p>
    <p className="metric">{usage}</p>
    <p className="unit">{until}</p>
  </div>
);

export const Box = () => (
  <>
    <section className="box flex">
      <BoxSection title="Cost 💰" usage="111" until="$" />
      <BoxSection title="Consumption ⚡" usage="222" until="kwh" />
      <BoxSection title="Footprint 👟" usage="333" until="tonnes" />
    </section>
  </>
);
