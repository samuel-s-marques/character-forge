import { splitmix32 } from "../../utils/splitmix32";
import { processFile } from "../../utils/utils";

export class SurnamesModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadNamesData(): any {
    return processFile("surnames")["data"];
  }

  public getRandomSurname(): string {
    const rng = new splitmix32(this.seed);
    const surnames = this.loadNamesData();

    const randomIndex = Math.floor(rng.random() * surnames.length);

    return surnames[randomIndex];
  }
}
