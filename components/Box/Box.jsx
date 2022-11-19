import React from "react";

export const Box = ({ title, usage, until }) => (
  <div className="regularBox overflow-hidden shadow-2 roundedMore">
    <p className="title">{title}</p>
    <p className="metric">{usage}</p>
    <p className="unit">{until}</p>
  </div>
);
