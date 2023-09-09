import { splitmix32 } from "../../utils/splitmix32";
import { processFile } from "../../utils/utils";

export class PoliticsModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadPoliticData(): any {
    return processFile("politics")["data"];
  }

  public getRandomPolitic(): string {
    const rng = new splitmix32(this.seed);
    const politics = this.loadPoliticData();
    const randomIndex = Math.floor(rng.random() * politics.length);

    return politics[randomIndex];
  }
}
