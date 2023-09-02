import { Mulberry32 } from "../../utils/mulberry32";
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
    const rng = new Mulberry32(this.seed);
    const occupations = this.loadNamesData();
    const randomIndex = Math.floor(rng.random() * occupations.length);

    return occupations[randomIndex];
  }
}
