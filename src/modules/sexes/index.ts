import { processFile } from "../../utils/utils";

export interface Sex {}

export class SexesModule {
  private loadNamesData(): any {
    return processFile("sexes")["data"];
  }

  public getRandomSex(): Sex {
    const sexes = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * sexes.length);

    return sexes[randomIndex];
  }
}
