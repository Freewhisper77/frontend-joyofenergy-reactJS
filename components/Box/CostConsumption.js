export const getPowerConsumption = (readings) => {
  const values = readings.map(({ value }) => value);
  return Math.round(values.reduce((x, y) => x + y));
};

export const getCost = (consumption) => {
  return Math.round(consumption * 0.138);
};

export const getFootPrint = (consumption) => {
  return (consumption * 0.0002532).toFixed(4);
};
