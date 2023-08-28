import { processFile } from "../../utils/utils";

export class EyeColorsModule {
  private loadNamesData(): any {
    return processFile("eyecolors")["data"];
  }

  public getRandomEyeColor(): string {
    const eyeColors = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * eyeColors.length);

    return eyeColors[randomIndex];
  }
}
