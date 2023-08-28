import { processFile } from "../../utils/utils";

export class SexualitiesModule {
  private loadSexualityData(): any {
    return processFile("sexualities")["data"];
  }

  public getRandomSexuality(): string {
    const sexualities = this.loadSexualityData();
    const randomIndex = Math.floor(Math.random() * sexualities.length);

    return sexualities[randomIndex];
  }
}
