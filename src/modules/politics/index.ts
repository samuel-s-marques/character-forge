import { Mulberry32 } from "../../utils/mulberry32";
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
    const rng = new Mulberry32(this.seed);
    const politics = this.loadPoliticData();
    const randomIndex = Math.floor(rng.random() * politics.length);

    return politics[randomIndex];
  }
}
