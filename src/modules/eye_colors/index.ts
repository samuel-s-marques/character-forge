import { processFile } from "../../utils/utils";

export interface EyeColor {}

export class EyeColorsModule {
  interfaceName = 'EyeColor'

  private loadNamesData(): any {
    return processFile("eye_colors")["data"];
  }

  public getRandomEyeColor(): EyeColor {
    const eyeColors = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * eyeColors.length);

    return eyeColors[randomIndex];
  }
}
