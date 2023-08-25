import { processFile } from "../../utils/utils";

export interface Hobbies {}

export class HobbiesModule {
  private loadHobbiesData(): any {
    return processFile("hobbies")["data"];
  }

  public getRandomHobbies(): Hobbies {
    const hobbies = this.loadHobbiesData();
    const selectedHobbies: string[] = [];
    const numItemsToPick = Math.floor(Math.random() * 3) + 1;

    for (let index = 0; index < numItemsToPick; index++) {
      const randomIndex = Math.floor(Math.random() * hobbies.length);

      if (!selectedHobbies.includes(hobbies[randomIndex])) {
        selectedHobbies.push(hobbies[randomIndex]);
      }
    }

    return selectedHobbies;
  }
}
