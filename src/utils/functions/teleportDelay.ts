const DELAY_UNIT = 1000;

const calculateDelay = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2) * DELAY_UNIT;
};

export default calculateDelay;
