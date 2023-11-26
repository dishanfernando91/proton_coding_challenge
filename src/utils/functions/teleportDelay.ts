import { DELAY_UNIT } from "../constants";

const calculateDelay = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number => {
  const dx = Math.abs(x1 - x2);
  const dy = Math.abs(y1 - y2);

  const diagonalMovement = Math.min(dx, dy);
  const straightMovement = Math.abs(dx - dy);

  return (diagonalMovement + straightMovement) * DELAY_UNIT;
};

export default calculateDelay;
