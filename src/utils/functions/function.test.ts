import calculateDelay from "./teleportDelay";

describe("calculateDelay function", () => {
  const DELAY_UNIT = 10;

  it("calculates delay correctly for given coordinates", () => {
    const delay1 = calculateDelay(1, 1, 4, 5);
    expect(delay1).toEqual(Math.abs(1 - 4) + Math.abs(1 - 5) * DELAY_UNIT);

    const delay2 = calculateDelay(0, 0, 0, 0);
    expect(delay2).toEqual(Math.abs(0 - 0) + Math.abs(0 - 0) * DELAY_UNIT);
  });
});
