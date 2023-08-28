import { generateRandomNumber } from "../../utils/utils";


export class AgesModule {
  public getRandomAge(min: number = 18, max: number = 50): number {
    return generateRandomNumber(min, max);
  }
}
