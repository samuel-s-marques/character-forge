import { processFile } from "../../utils/utils";

export interface Hobbies {}

export class HobbiesModule {
  private loadHobbiesData(): any {
    return processFile("hobbies")["data"];
  }

  public getRandomHobbies(min: number = 1, max: number = 3): Hobbies {
    const hobbies = this.loadHobbiesData();
    const selectedHobbies: string[] = [];
    const numItemsToPick = Math.floor(Math.random() * (max - min + 1)) + min;

    for (let index = 0; index < numItemsToPick; index++) {
      const randomIndex = Math.floor(Math.random() * hobbies.length);

      if (!selectedHobbies.includes(hobbies[randomIndex])) {
        selectedHobbies.push(hobbies[randomIndex]);
      }
    }

    return selectedHobbies;
  }
}
