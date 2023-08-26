import { processFile } from "../../utils/utils";

export interface HairColor {}

export class HairColorsModule {
  interfaceName = 'HairColor'

  private loadNamesData(): any {
    return processFile("hair_colors")["data"];
  }

  public getRandomHairColor(): HairColor {
    const hairColors = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * hairColors.length);

    return hairColors[randomIndex];
  }
}
