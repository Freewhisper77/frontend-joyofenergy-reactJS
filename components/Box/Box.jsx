import React from "react";

function Box({ title, usage, until }) {
  return (
    <div className="regularBox overflow-hidden shadow-2 roundedMore">
      <p className="title">{title}</p>
      <p className="metric">{usage}</p>
      <p className="unit">{until}</p>
    </div>
  );
}

export default Box;
