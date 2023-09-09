import { splitmix32 } from "../../utils/splitmix32";
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
    const rng = new splitmix32(this.seed);
    const sexes = this.loadNamesData();
    const randomIndex = Math.floor(rng.random() * sexes.length);

    return sexes[randomIndex];
  }
}
