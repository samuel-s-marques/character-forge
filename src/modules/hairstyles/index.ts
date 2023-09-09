import { splitmix32 } from "../../utils/splitmix32";
import { processFile } from "../../utils/utils";

export class HairStylesModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadNamesData(): any {
    return processFile("hairstyles")["data"];
  }

  public getRandomHairStyle(): string {
    const rng = new splitmix32(this.seed);
    const hairStyles = this.loadNamesData();
    const randomIndex = Math.floor(rng.random() * hairStyles.length);

    return hairStyles[randomIndex];
  }
}
