import { processFile } from "../../utils/utils";

export interface EyeColor {}

export class EyeColorsModule {
  private loadNamesData(): any {
    return processFile("eyecolors")["data"];
  }

  public getRandomEyeColor(): EyeColor {
    const eyeColors = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * eyeColors.length);

    return eyeColors[randomIndex];
  }
}
