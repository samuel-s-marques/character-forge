import { Mulberry32 } from "../../utils/mulberry32";
import { processFile } from "../../utils/utils";

export class SexesModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadNamesData(): any {
    return processFile("sexes")["data"];
  }

  public getRandomSex(): string {
    const rng = new Mulberry32(this.seed);
    const sexes = this.loadNamesData();
    const randomIndex = Math.floor(rng.random() * sexes.length);

    return sexes[randomIndex];
  }
}
