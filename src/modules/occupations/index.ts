import { splitmix32 } from "../../utils/splitmix32";
import { processFile } from "../../utils/utils";

export class OccupationsModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadNamesData(): any {
    return processFile("occupations")["data"];
  }

  public getRandomOccupation(): string {
    const rng = new splitmix32(this.seed);
    const occupations = this.loadNamesData();
    const randomIndex = Math.floor(rng.random() * occupations.length);

    return occupations[randomIndex];
  }
}
