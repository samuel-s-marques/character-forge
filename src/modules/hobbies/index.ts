import { splitmix32 } from "../../utils/splitmix32";
import { generateRandomNumber, processFile } from "../../utils/utils";

export class HobbiesModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadHobbiesData(): any {
    return processFile("hobbies")["data"];
  }

  public getRandomHobbies(min: number = 1, max: number = 3): string[] {
    const rng = new splitmix32(this.seed);
    const hobbies = this.loadHobbiesData();
    const selectedHobbies: string[] = [];
    const numItemsToPick = generateRandomNumber(min, max, this.seed);

    while (selectedHobbies.length != numItemsToPick) {
      const randomIndex = Math.floor(rng.random() * hobbies.length);

      if (!selectedHobbies.includes(hobbies[randomIndex])) {
        selectedHobbies.push(hobbies[randomIndex]);
      }
    }

    return selectedHobbies;
  }
}
