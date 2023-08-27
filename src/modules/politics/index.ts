import { processFile } from "../../utils/utils";

export interface Politic {}

export class PoliticsModule {
  private loadPoliticData(): any {
    return processFile("politics")["data"];
  }

  public getRandomPolitic(): Politic {
    const politics = this.loadPoliticData();
    const randomIndex = Math.floor(Math.random() * politics.length);

    return politics[randomIndex];
  }
}
