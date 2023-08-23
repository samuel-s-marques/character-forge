import { processFile } from "../../utils/utils";

export interface HairColor {}

export class HairColorsModule {
  private loadNamesData(): any {
    return processFile("haircolors")["data"];
  }

  public getRandomHairColor(): HairColor {
    const hairColors = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * hairColors.length);

    return hairColors[randomIndex];
  }
}
