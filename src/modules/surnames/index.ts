import { processFile } from "../../utils/utils";

export interface Surname {}

export class SurnamesModule {
  private loadNamesData(): any {
    return processFile("surnames")["data"];
  }

  public getRandomSurname(): Surname {
    const surnames = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * surnames.length);

    return surnames[randomIndex];
  }
}
