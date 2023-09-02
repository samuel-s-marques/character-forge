import { Mulberry32 } from "../../utils/mulberry32";
import { processFile } from "../../utils/utils";

export class EyeColorsModule {
  private seed: number | undefined;

  constructor(seed?: number) {
    this.seed = seed;
  }

  private loadNamesData(): any {
    return processFile("eyecolors")["data"];
  }

  public getRandomEyeColor(): string {
    const rng = new Mulberry32(this.seed);
    const eyeColors = this.loadNamesData();
    const randomIndex = Math.floor(rng.random() * eyeColors.length);

    return eyeColors[randomIndex];
  }
}
