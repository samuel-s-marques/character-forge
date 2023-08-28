import { processFile } from "../../utils/utils";

export class SexesModule {
  private loadNamesData(): any {
    return processFile("sexes")["data"];
  }

  public getRandomSex(): string {
    const sexes = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * sexes.length);

    return sexes[randomIndex];
  }
}
