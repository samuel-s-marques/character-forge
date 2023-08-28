import { processFile } from "../../utils/utils";

export class HairColorsModule {
  private loadNamesData(): any {
    return processFile("haircolors")["data"];
  }

  public getRandomHairColor(): string {
    const hairColors = this.loadNamesData();
    const randomIndex = Math.floor(Math.random() * hairColors.length);

    return hairColors[randomIndex];
  }
}
