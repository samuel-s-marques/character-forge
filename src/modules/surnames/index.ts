import { processFile } from "../../utils/utils";

export class SurnamesModule {
  private loadNamesData(): any {
    return processFile("surnames")["data"];
  }

  public getRandomSurname(): string {
    const surnames = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * surnames.length);

    return surnames[randomIndex];
  }
}
