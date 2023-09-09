import { AgesModule } from "../../src";
import { generateRandomNumber, weightedRandom } from "../../src/utils/utils";

describe("generateRandomNumber", () => {
  it("should generate a fully random number", () => {
    const randomNumber = generateRandomNumber(10, 50);

    expect(randomNumber).toBeGreaterThanOrEqual(10);
    expect(randomNumber).toBeLessThanOrEqual(50);
  });
});

describe("weightedRandom", () => {
  it("should return an item from the input array based on weights", () => {
    const items = ["A", "B", "C", "D"];
    const weights = [1, 2, 3, 4];

    const result = weightedRandom(items, weights, 123);

    expect(items).toContain(result);
  });

  it("should return an item from the input array when seed is not provided", () => {
    const items = ["A", "B", "C", "D"];
    const weights = [1, 2, 3, 4];

    const result = weightedRandom(items, weights);

    expect(items).toContain(result);
  });

  it("should return the only item in the array when there is only one item", () => {
    const items = ["A"];
    const weights = [1];

    const result = weightedRandom(items, weights);

    expect(result).toBe("A");
  });

  it("should handle the case when the input arrays are empty", () => {
    const items: any[] = [];
    const weights: number[] = [];

    const result = weightedRandom(items, weights);

    expect(result).toBeUndefined();
  });
});
