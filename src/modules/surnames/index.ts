import { Mulberry32 } from "../../utils/mulberry32";
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
    const rng = new Mulberry32(this.seed);
    const surnames = this.loadNamesData();

    const randomIndex = Math.floor(rng.random() * surnames.length);

    return surnames[randomIndex];
  }
}
