import { processFile } from "../../utils/utils";

export class PoliticsModule {
  private loadPoliticData(): any {
    return processFile("politics")["data"];
  }

  public getRandomPolitic(): string {
    const politics = this.loadPoliticData();
    const randomIndex = Math.floor(Math.random() * politics.length);

    return politics[randomIndex];
  }
}
