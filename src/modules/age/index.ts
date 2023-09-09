import { generateRandomNumber } from "../../utils/utils";

export class AgesModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  public getRandomAge(min: number = 18, max: number = 50): number {
    return generateRandomNumber(min, max, this.seed);
  }
}
