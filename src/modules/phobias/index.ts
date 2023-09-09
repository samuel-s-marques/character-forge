import { splitmix32 } from "../../utils/splitmix32";
import { processFile } from "../../utils/utils";

export class PhobiasModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadPhobiaData(): any {
    return processFile("phobias")["data"];
  }

  public getRandomPhobia(chance: number = 0.2): string | undefined {
    const rng = new splitmix32(this.seed);

    if (rng.random() > chance) {
      return undefined;
    }

    const phobias = this.loadPhobiaData();
    const randomIndex = Math.floor(rng.random() * phobias.length);

    return phobias[randomIndex];
  }
}
