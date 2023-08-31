import { generateRandomNumber, processFile } from "../../utils/utils";

export class HobbiesModule {
  private loadHobbiesData(): any {
    return processFile("hobbies")["data"];
  }

  public getRandomHobbies(min: number = 1, max: number = 3): string[] {
    const hobbies = this.loadHobbiesData();
    const selectedHobbies: string[] = [];
    const numItemsToPick = generateRandomNumber(min, max);

    while (selectedHobbies.length != numItemsToPick) {
      const randomIndex = Math.floor(Math.random() * hobbies.length);

      if (!selectedHobbies.includes(hobbies[randomIndex])) {
        selectedHobbies.push(hobbies[randomIndex]);
      }
    }

    return selectedHobbies;
  }
}
