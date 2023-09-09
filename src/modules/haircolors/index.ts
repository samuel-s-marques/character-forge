import { splitmix32 } from "../../utils/splitmix32";
import { processFile } from "../../utils/utils";

export class HairColorsModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadNamesData(): any {
    return processFile("haircolors")["data"];
  }

  public getRandomHairColor(): string {
    const rng = new splitmix32(this.seed);
    const hairColors = this.loadNamesData();
    const randomIndex = Math.floor(rng.random() * hairColors.length);

    return hairColors[randomIndex];
  }
}
