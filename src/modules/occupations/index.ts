import { processFile } from "../../utils/utils";

export class OccupationsModule {
  private loadNamesData(): any {
    return processFile("occupations")["data"];
  }

  public getRandomOccupation(): string {
    const occupations = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * occupations.length);

    return occupations[randomIndex];
  }
}
