import { processFile } from "../../utils/utils";

export interface Sexuality {}

export class SexualitiesModule {
  private loadSexualityData(): any {
    return processFile("sexualities")["data"];
  }

  public getRandomSexuality(): Sexuality {
    const sexualities = this.loadSexualityData();
    const randomIndex = Math.floor(Math.random() * sexualities.length);

    return sexualities[randomIndex];
  }
}
