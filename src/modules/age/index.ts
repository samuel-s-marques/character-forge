import { generateRandomNumber } from "../../utils/utils";

export interface Age {}

export class AgesModule {
  public getRandomAge(min: number = 18, max: number = 50): Age {
    return generateRandomNumber(min, max);
  }
}
