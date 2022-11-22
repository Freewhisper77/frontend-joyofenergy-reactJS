import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar.jsx";
import { EnergyConsumption } from "./EnergyConsumption.jsx";
import {
  getReadings,
  groupByDay,
  groupByHour,
  sortByTime,
} from "../utils/reading";
import { BoxSection } from "./Box/BoxSection";
import { formatDateLabel } from "../utils/chart";

export const App = () => {
  const [readings, setReadings] = useState();
  const [toggle, setToggle] = useState(true);
  useEffect(async () => {
    const result = await getReadings();
    setReadings(result);
  }, []);

  function clickBtnOf30Days() {
    setToggle(true);
  }
  function clickBtnOf24Hours() {
    setToggle(false);
  }

  if (!readings) {
    return null;
  }

  const dataOf30Days = sortByTime(groupByDay(readings)).slice(-30);
  const dataOf24Hours = sortByTime(groupByHour(readings)).slice(-24);

  const labelsOf24Hours = [...Array(24).keys()].map((value) =>
    value < 10 ? `0${value}` : `${value}`
  );
  const labelsOf30Days = dataOf30Days.map(({ time }) => formatDateLabel(time));

  return (
    <div className="background shadow-2 flex overflow-hidden">
      <aside className="p3 menuWidth overflow-auto">
        <Sidebar />
      </aside>
      <article className="bg-very-light-grey p3 flex-auto overflow-auto">
        <EnergyConsumption
          // isDone={toggle?clickBtnOf30Days():clickBtnOf24Hours()}
          isClicked30DaysBtn={clickBtnOf30Days}
          isClicked24HoursBtn={clickBtnOf24Hours}
          data={toggle ? dataOf30Days : dataOf24Hours}
          label={toggle ? labelsOf30Days : labelsOf24Hours}
        />
        <BoxSection data={toggle ? dataOf30Days : dataOf24Hours} />
      </article>
    </div>
  );
};
