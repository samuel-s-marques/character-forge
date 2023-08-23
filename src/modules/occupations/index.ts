import { processFile } from "../../utils/utils";

export interface Occupation {}

export class OccupationsModule {
  private loadNamesData(): any {
    return processFile("occupations")["data"];
  }

  public getRandomOccupation(): Occupation {
    const occupations = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * occupations.length);

    return occupations[randomIndex];
  }
}
